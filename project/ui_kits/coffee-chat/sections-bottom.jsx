/* global React */
const DSc = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const { Badge: BadgeC, FaqItem: FaqItemC, SectionHeading: SectionHeadingC, Button: ButtonC } = DSc;

const SEC = { padding: '80px 48px' };
const INN = { maxWidth: 'var(--container)', margin: '0 auto' };
const ASSETc = '../../assets/logos/';

/* ============================ AGENDA ============================ */
const AGENDA = [
  { part: '1. Giới thiệu', time: '14:00 – 14:15', dur: '15 phút', body: <>KTC và doanh nghiệp FPT Software giới thiệu.</> },
  { part: '2. Làm quen', time: '14:15 – 14:25', dur: '10 phút', body: <>Người tham gia giới thiệu về bản thân.</> },
  { part: '3. Q&A Session', time: '14:25 – 14:55', dur: '30 phút', highlight: true, body: <>Ứng viên đặt câu hỏi. Doanh nghiệp & KTC trả lời và giải đáp các thắc mắc (môi trường làm việc, lương/benefits, visa, kỳ vọng công việc).</> },
  { part: '4. Apply vị trí', time: '14:55 – 15:00', dur: '5 phút', body: <>Dành cho ứng viên chưa apply.</> },
];
function Agenda() {
  return (
    <section style={{ ...SEC, background: 'var(--noise), var(--surface-2)', borderTop: '1px solid var(--color-border)' }}>
      <div style={INN}>
        <SectionHeadingC eyebrow="Agenda" title="JUNE COFFEE CHAT" />
        <div style={{ marginTop: '40px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border)', background: 'var(--white)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '180px 150px 1fr', background: 'var(--navy-800)' }}>
            {['Phần', 'Thời gian', 'Nội dung'].map((h) => (
              <div key={h} style={{ padding: '16px 20px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-3xs)', fontWeight: 'var(--fw-bold)', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{h}</div>
            ))}
          </div>
          {AGENDA.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 150px 1fr',
              borderTop: '1px solid var(--color-border)', background: r.highlight ? 'var(--blue-100)' : 'transparent' }}>
              <div style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-bold)', color: r.highlight ? 'var(--blue-500)' : 'var(--navy-800)', borderRight: '1px solid var(--color-border)' }}>{r.part}</div>
              <div style={{ padding: '16px 20px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)', color: 'var(--blue-600)', borderRight: '1px solid var(--color-border)' }}>{r.time}<br /><span style={{ fontWeight: 400, color: 'var(--ink-500)' }}>({r.dur})</span></div>
              <div style={{ padding: '16px 20px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-body)', lineHeight: 'var(--lh-normal)' }}>{r.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ COMPANY ============================ */
function Company() {
  return (
    <section style={{ ...SEC, background: 'var(--white)', borderTop: '1px solid var(--color-border)' }}>
      <div style={INN}>
        <SectionHeadingC eyebrow="Công ty partner" title="FPT Software Korea" />
        <div style={{ marginTop: '40px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-2xl)', padding: '36px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '36px', alignItems: 'start' }}>
          <div style={{ width: '120px', height: '96px', borderRadius: 'var(--radius-xl)', background: 'var(--white)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px', flexShrink: 0 }}>
            <img src={ASSETc + 'fpt-software-korea.png'} alt="FPT Software Korea" style={{ width: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', color: 'var(--navy-800)', marginBottom: '8px' }}>FPT Software Korea</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-relaxed)', marginBottom: '20px', maxWidth: '600px' }}>
              Thành viên của FPT Software — một trong những công ty IT lớn nhất Việt Nam với hiện diện tại Hàn Quốc.
              FPT Software Korea cung cấp dịch vụ phát triển phần mềm cho các doanh nghiệp Hàn Quốc, tập trung vào chất lượng kỹ thuật và môi trường làm việc đa văn hóa.
            </p>
            <ButtonC variant="ghost" size="sm" href="https://fptsoftware.kr/" arrow>Xem website công ty</ButtonC>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FAQ ============================ */
const FAQS = [
  { q: 'Không biết tiếng Hàn có tham gia được không?', a: 'Hoàn toàn được. Buổi Coffee Chat có KTC hỗ trợ phiên dịch Việt–Hàn real-time. Môi trường làm việc tại FPT Software Korea cũng sử dụng tiếng Anh là ngôn ngữ kỹ thuật chính.' },
  { q: 'Chưa apply KTC vẫn tham gia được không?', a: 'Được. Bạn có thể tham gia để tìm hiểu trước. Nếu sau buổi bạn muốn tiếp tục, KTC sẽ gửi link JD để bạn apply và bắt đầu quá trình sàng lọc.' },
  { q: 'Buổi này có phí không?', a: 'Miễn phí hoàn toàn.' },
  { q: 'Tôi có thể gửi câu hỏi trước không?', a: 'Được — điền vào ô "Câu hỏi muốn hỏi" khi đăng ký. KTC sẽ tổng hợp và gửi cho FPT Software Korea chuẩn bị trước, giúp Q&A session chất lượng hơn.' },
];
function Faq() {
  return (
    <section style={{ ...SEC, background: 'var(--noise), var(--surface-2)', borderTop: '1px solid var(--color-border)' }}>
      <div style={INN}>
        <SectionHeadingC eyebrow="Câu hỏi thường gặp" title="VỀ COFFEE CHAT" />
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {FAQS.map((f, i) => <FaqItemC key={i} q={f.q} a={f.a} defaultOpen={i === 0} />)}
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  return (
    <footer style={{ background: 'var(--navy-800)', padding: '40px 48px', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-extrabold)', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.5px', marginBottom: '12px' }}>
        KTC 2026 — K-Tech College
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,0.45)' }}>
        Kết nối nhân tài CNTT Việt Nam với doanh nghiệp Hàn Quốc · ktc2026@likelion.vn
      </div>
    </footer>
  );
}

window.CoffeeChatBot = { Agenda, Company, Faq, Footer };
