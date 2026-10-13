import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'The Complete Guide to Trenchless Construction — Pipelining Network';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(125deg, #fff7ed 0%, #ffffff 58%, #ecfeff 100%)',
          color: '#111827',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -100,
            top: -160,
            width: 530,
            height: 530,
            borderRadius: 265,
            background: 'rgba(249, 115, 22, 0.13)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 70,
            bottom: -230,
            width: 550,
            height: 550,
            borderRadius: 275,
            border: '2px solid rgba(14, 165, 233, 0.25)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '58px 68px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 44,
                borderRadius: 10,
                background: '#ea580c',
              }}
            />
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
                color: '#334155',
              }}
            >
              PIPELINING NETWORK
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 760 }}>
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                borderRadius: 30,
                padding: '10px 18px',
                background: '#ffedd5',
                color: '#9a3412',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 2,
                marginBottom: 24,
              }}
            >
              INDUSTRY GUIDE
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 62,
                lineHeight: 1.08,
                fontWeight: 750,
                letterSpacing: -2,
              }}
            >
              The Complete Guide to
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 70,
                lineHeight: 1.06,
                fontWeight: 800,
                letterSpacing: -2.5,
                color: '#ea580c',
                marginTop: 4,
              }}
            >
              Trenchless Construction
            </div>
            <div
              style={{
                display: 'flex',
                maxWidth: 700,
                fontSize: 23,
                lineHeight: 1.45,
                color: '#64748b',
                marginTop: 24,
              }}
            >
              Pipe bursting, pipe lining, directional drilling, and project planning.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#475569', fontSize: 17 }}>
            <div style={{ width: 38, height: 3, background: '#ea580c', borderRadius: 2 }} />
            Practical guidance for underground infrastructure projects
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            right: 80,
            top: 235,
            width: 210,
            height: 105,
            borderRadius: 80,
            border: '16px solid rgba(14, 165, 233, 0.35)',
            background: 'rgba(255, 255, 255, 0.75)',
            transform: 'rotate(-15deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 155,
            top: 273,
            width: 22,
            height: 22,
            borderRadius: 11,
            background: '#f97316',
            boxShadow: '0 0 35px rgba(249, 115, 22, 0.45)',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
