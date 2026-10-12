'use client';

import { useState } from 'react';

const questions = [
  {
    q: 'What problem are you experiencing?',
    options: [
      'Backups, slow drains, or recurring clogs',
      'Cracked, leaking, root-damaged, or old pipes',
      'A pipe has completely collapsed',
      'I’m not sure',
    ],
  },
  {
    q: 'Where is the pipe located?',
    options: [
      'Under my yard or landscaping',
      'Under a driveway, patio, or parking area',
      'Under my home or concrete slab',
      'I’m not sure',
    ],
  },
  {
    q: 'What matters most to you?',
    options: [
      'Avoiding major digging',
      'A long-term repair',
      'A quick, clean repair',
      'Understanding my options',
    ],
  },
];

export default function PipeRepairQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const selectAnswer = (answer: number) => {
    const next = [...answers, answer];
    setAnswers(next);

    setTimeout(() => {
      if (step === questions.length - 1) {
        setDone(true);
      } else {
        setStep(step + 1);
      }
    }, 250);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  if (done) {
    const collapsed = answers[0] === 2;

    return (
      <div className="rounded-2xl bg-slate-950 p-5 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
          Your result
        </p>

        <h3 className="mt-2 text-xl font-semibold leading-tight">
          {collapsed
            ? 'Trenchless options may still be possible.'
            : 'Trenchless repair may be worth exploring.'}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          A camera inspection can help determine the condition of your pipe
          and which repair methods may fit.
        </p>

        <div className="mt-4 flex gap-2">
          <a
            href="/all_contractor"
            className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-400"
          >
            Find a contractor →
          </a>

          <button
            onClick={restart}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/10"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">
            Pipe repair finder
          </p>

          <p className="mt-1 text-xs text-slate-400">
            30-second quiz
          </p>
        </div>

        <span className="text-xs font-medium text-slate-400">
          {step + 1}/{questions.length}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-950">
          {current.q}
        </h3>

        <div className="mt-4 space-y-2">
          {current.options.map((option, index) => (
            <button
              key={option}
              onClick={() => selectAnswer(index)}
              className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-orange-300 hover:bg-orange-50"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500 group-hover:bg-orange-500 group-hover:text-white">
                {String.fromCharCode(65 + index)}
              </span>

              <span className="text-sm leading-5 text-slate-700">
                {option}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-1">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full ${
              index <= step ? 'bg-orange-500' : 'bg-slate-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}