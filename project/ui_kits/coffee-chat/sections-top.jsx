/* global React */
const { useState } = React;
const DS = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const { Button, Badge, JobCard, FaqItem, SectionHeading, Eyebrow, MetaItem, FeatureCard, Input, Select, Textarea } = DS;
/* Defensive: never let a momentarily-missing component blank the whole page. */
const Icon = DS.Icon || (() => null);

const ASSET = '../../assets/logos/';
const IMG = '../../assets/images/';

/* ============================ TOPBAR ============================ */
function Topbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 'var(--topbar-h)',
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)', boxShadow: 'var(--shadow-xs)',
    }}>
      <img src={ASSET + 'partners-strip.png'} alt="Ministry of SMEs and Startups · KOSME · LIKELION · JOBKOREA" style={{ height: '30px' }} />
      <Button variant="primary" size="sm" href="#register">Đăng ký ngay</Button>
    </nav>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <section id="home" style={{
      padding: '72px 48px 80px',
      background: `linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.55)), url(${IMG}hero-bg.jpg) center/cover no-repeat, var(--grad-hero)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Hero: text left, decorative coffee cup right. */}
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '40px', alignItems: 'center',
        position: 'relative', zIndex: 1 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '26px' }}>
            <img src={ASSET + 'ktc-fpt-lockup.png'} alt="KTC × FPT" style={{ height: '50px' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)',
            fontWeight: 'var(--fw-extrabold)', lineHeight: 'var(--lh-tight)',
            color: 'var(--navy-800)', marginBottom: '16px', letterSpacing: 'var(--ls-tight)' }}>
            Gặp gỡ<br />
            <span style={{ color: 'var(--pink-600)' }}>FPT Software</span>{' '}
            <span style={{ color: 'var(--blue-600)' }}>Korea</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)',
            color: 'var(--text-body)', lineHeight: 'var(--lh-relaxed)', marginBottom: '32px', maxWidth: '480px' }}>
            Buổi trao đổi online giữa nhân tài CNTT Việt Nam và đại diện FPT Software Korea
            về các vị trí tuyển dụng on-site Hàn Quốc. Hỏi thẳng — trả lời thật.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
            <MetaItem icon={<Icon name="calendar" size={22} />}>Thứ Năm, 19 tháng 6 năm 2026</MetaItem>
            <MetaItem icon={<Icon name="clock" size={22} />}>14:00 – 15:00 ICT (60 phút)</MetaItem>
            <MetaItem icon={<Icon name="monitor" size={22} />}>Online qua Zoom</MetaItem>
            <MetaItem icon={<Icon name="users" size={22} />}>10–20 người</MetaItem>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge tone="blue">Fresher welcome</Badge>
            <Badge tone="blue">Experienced dev</Badge>
            <Badge tone="green">Phiên dịch Việt–Hàn</Badge>
            <Badge tone="gray">Miễn phí</Badge>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={IMG + 'coffee-cup.jpg'} alt="" aria-hidden="true" style={{
            display: 'block', width: '380px', maxWidth: '100%',
            mixBlendMode: 'multiply', pointerEvents: 'none', userSelect: 'none',
          }} />
        </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FORM ============================ */
function RegisterForm() {
  const [done, setDone] = useState(false);
  const [vals, setVals] = useState({ name: '', email: '', phone: '', exp: '', applied: '' });
  const set = (k) => (e) => setVals((v) => ({ ...v, [k]: e.target.value }));
  const submit = () => {
    if (!vals.name || !vals.email || !vals.phone || !vals.exp || !vals.applied) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc (*)'); return;
    }
    if (!vals.email.includes('@')) { alert('Email không hợp lệ'); return; }
    setDone(true);
  };
  return (
    <div id="register" style={{
      background: 'var(--white)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-2xl)', padding: '32px', boxShadow: 'var(--shadow-form)',
    }}>
      {done ? (
        <div style={{ textAlign: 'center', padding: '32px 16px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-extrabold)', color: 'var(--navy-800)', marginBottom: '8px' }}>Đăng ký thành công!</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-body)', lineHeight: 'var(--lh-relaxed)' }}>
            Cảm ơn bạn đã đăng ký. Kiểm tra email để nhận link Zoom và xác nhận lịch.<br /><br />
            <strong style={{ color: 'var(--navy-800)' }}>📅 Thứ Năm, 19/6 · 14:00 – 15:00 ICT</strong>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-extrabold)', color: 'var(--navy-800)', marginBottom: '4px' }}>Đăng ký tham gia</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', marginBottom: '20px' }}>Điền thông tin để giữ slot của bạn</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--amber-100)', border: '1px solid var(--amber-200)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--amber-500)', borderRadius: '50%', flexShrink: 0 }}></span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-2xs)', fontWeight: 'var(--fw-semibold)', color: 'var(--amber-600)' }}>Slot có hạn · Đóng khi đủ số lượng</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Input label="Họ và tên" required placeholder="Nguyễn Văn A" value={vals.name} onChange={set('name')} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Input label="Email" required type="email" placeholder="email@example.com" value={vals.email} onChange={set('email')} />
              <Input label="Điện thoại" required placeholder="09xx xxx xxx" value={vals.phone} onChange={set('phone')} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Select label="Kinh nghiệm" required options={['Fresher (dưới 1 năm)', '1–2 năm', '3–5 năm', '5+ năm']} value={vals.exp} onChange={set('exp')} />
              <Select label="Đã apply KTC?" required options={['Rồi', 'Chưa']} value={vals.applied} onChange={set('applied')} />
            </div>
            <Select label="Vị trí quan tâm" options={['FPT401 – Embedded Software Developer', 'FPT402 – AI/ML Engineer', 'Cả hai']} />
            <Textarea label="Câu hỏi muốn hỏi tại buổi Chat" placeholder="Bạn đang thắc mắc điều gì về onsite Hàn?" />
            <Button variant="primary" full arrow onClick={submit}>Đăng ký giữ slot</Button>
            <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-2xs)', color: 'var(--text-muted)', lineHeight: 'var(--lh-normal)' }}>
              Sau khi đăng ký, bạn sẽ nhận email xác nhận và link Zoom tham gia.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================ REGISTER SECTION (bottom) ============================ */
function RegisterSection() {
  return (
    <section id="register-section" style={{
      padding: '80px 48px',
      background: 'var(--noise), var(--surface-2)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Eyebrow style={{ marginBottom: '12px' }}>Đăng ký tham gia</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)',
            fontWeight: 'var(--fw-extrabold)', color: 'var(--navy-800)', letterSpacing: 'var(--ls-tight)' }}>
            Giữ slot Coffee Chat của bạn
          </h2>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}

window.CoffeeChatTop = { Topbar, Hero, RegisterSection };
