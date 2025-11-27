import { ChevronLeft, Calendar, Clock, Package, Check } from 'lucide-react';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import { orders } from '../../data/orders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ReturnFlowProps {
  orderId: string;
  onBack: () => void;
  onSuccess: () => void;
}

export function ReturnFlow({ orderId, onBack, onSuccess }: ReturnFlowProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const order = orders.find(o => o.id === orderId);
  if (!order) return null;

  const reasons = [
    'Artikel gefällt mir nicht',
    'Falsche Grösse/Farbe',
    'Beschädigt bei Lieferung',
    'Entspricht nicht der Beschreibung',
    'Funktioniert nicht richtig',
    'Anderer Grund'
  ];

  const getNextDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('de-CH', { weekday: 'short', day: '2-digit', month: 'short' })
      });
    }
    return days;
  };

  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '12:00 - 14:00',
    '14:00 - 16:00',
    '16:00 - 18:00',
    '18:00 - 20:00'
  ];

  const handleNext = () => {
    if (step === 1 && selectedItem !== null && selectedReason) {
      setStep(2);
    } else if (step === 2 && selectedDate && selectedTime) {
      setStep(3);
    }
  };

  const handleConfirm = () => {
    onSuccess();
  };

  const qrData = JSON.stringify({
    orderId,
    itemId: selectedItem,
    returnDate: selectedDate,
    returnTime: selectedTime,
    reason: selectedReason
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={step === 1 ? onBack : () => setStep((step - 1) as 1 | 2)} className="text-gray-900">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-gray-900">Retoure</h2>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full ${
                  s === step ? 'bg-blue-600' : s < step ? 'bg-blue-300' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Step 1: Select Item and Reason */}
      {step === 1 && (
        <div className="p-4">
          <h3 className="text-gray-900 mb-4">1. Artikel & Grund wählen</h3>
          
          {/* Items */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Welchen Artikel möchten Sie zurücksenden?</p>
            <div className="space-y-2">
              {order.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item.id)}
                  className={`w-full p-3 rounded-xl border-2 transition-all ${
                    selectedItem === item.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-1">CHF {item.price.toLocaleString()}</p>
                    </div>
                    {selectedItem === item.id && (
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Reasons */}
          {selectedItem !== null && (
            <div>
              <p className="text-sm text-gray-600 mb-3">Grund für die Rücksendung?</p>
              <div className="grid grid-cols-2 gap-2">
                {reasons.map((reason) => (
                  <button
                    key={reason}
                    onClick={() => setSelectedReason(reason)}
                    className={`p-3 rounded-lg border-2 text-sm transition-all ${
                      selectedReason === reason
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 bg-white text-gray-700'
                    }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!selectedItem || !selectedReason}
            className={`w-full mt-6 py-4 rounded-xl transition-colors ${
              selectedItem && selectedReason
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Weiter
          </button>
        </div>
      )}

      {/* Step 2: Select Pickup Date and Time */}
      {step === 2 && (
        <div className="p-4">
          <h3 className="text-gray-900 mb-4">2. Abholtermin wählen</h3>
          
          {/* Date Selection */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-gray-600" />
              <p className="text-sm text-gray-600">Abholdatum</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {getNextDays().map((day) => (
                <button
                  key={day.value}
                  onClick={() => setSelectedDate(day.value)}
                  className={`p-3 rounded-lg border-2 text-sm transition-all ${
                    selectedDate === day.value
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 bg-white text-gray-700'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <p className="text-sm text-gray-600">Zeitfenster</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border-2 text-sm transition-all ${
                      selectedTime === time
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 bg-white text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!selectedDate || !selectedTime}
            className={`w-full mt-6 py-4 rounded-xl transition-colors ${
              selectedDate && selectedTime
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Bestätigen
          </button>
        </div>
      )}

      {/* Step 3: QR Code */}
      {step === 3 && (
        <div className="p-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Retoure bestätigt!</h3>
            <p className="text-gray-600 mb-6">
              Zeigen Sie diesen QR-Code dem Lieferanten bei der Abholung.
            </p>

            {/* QR Code */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 inline-block mb-6">
              <QRCode value={qrData} size={200} />
            </div>

            {/* Pickup Details */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-start gap-3 mb-3">
                <Package className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Bestellung</p>
                  <p className="text-gray-900">{orderId}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Abholdatum</p>
                  <p className="text-gray-900">
                    {new Date(selectedDate).toLocaleDateString('de-CH', {
                      weekday: 'long',
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Zeitfenster</p>
                  <p className="text-gray-900">{selectedTime}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full py-4 bg-blue-600 text-white rounded-xl"
            >
              Fertig
            </button>
          </div>
        </div>
      )}
    </div>
  );
}