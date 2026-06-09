/* global React */
const DSb = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const { Badge: BadgeB, JobCard: JobCardB, FaqItem: FaqItemB, SectionHeading: SectionHeadingB, FeatureCard: FeatureCardB } = DSb;
/* Defensive: never let a momentarily-missing component blank the whole page. */
const IconM = DSb.Icon || (() => null);

const SECTION = { padding: '80px 48px' };
const INNER = { maxWidth: 'var(--container)', margin: '0 auto' };

/* ============================ ABOUT ============================ */
function About() {
  return (
    <section style={{ ...SECTION, background: 'var(--white)', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ ...INNER, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
        <SectionHeadingB eyebrow="Về Coffee Chat" title={<>Không phải webinar.<br />Không có script.</>}
          desc="Coffee Chat là buổi gặp gỡ nhỏ giữa IT developer Việt Nam và đại diện FPT Software Korea. Bạn đặt câu hỏi thực tế, họ trả lời thẳng thắn. KTC hỗ trợ phiên dịch Việt–Hàn xuyên suốt." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <FeatureCardB icon={<IconM name="target" size={30} />} title="Nhỏ và tập trung" desc="10–20 người, không bị mất trong đám đông" />
          <FeatureCardB icon={<IconM name="chat" size={30} />} title="Hỏi trực tiếp" desc="Không qua trung gian, không câu trả lời mẫu" />
          <FeatureCardB icon={<IconM name="globe" size={30} />} title="Phiên dịch live" desc="KTC dịch Việt–Hàn real-time" />
          <FeatureCardB icon={<IconM name="timer" size={30} />} title="60 phút" desc="Ngắn gọn, đủ để hiểu và quyết định" />
        </div>
      </div>
    </section>
  );
}

/* ============================ JOBS ============================ */
function Jobs() {
  return (
    <section style={{ ...SECTION, background: 'var(--noise), var(--surface-2)', borderTop: '1px solid var(--color-border)' }}>
      <div style={INNER}>
        <SectionHeadingB eyebrow="Vị trí tuyển dụng" title="2 vị trí onsite tại Hàn Quốc" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
          <JobCardB id="FPT401" title="Embedded Software Developer" level="Fresher / Junior · Onsite Korea"
            tags={[{label:'C/C++'}, {label:'Automotive'}, {label:'ASPICE', tone:'gray'}, {label:'5 vị trí', tone:'green'}]}
            info={[{label:'Mức lương', value:'2,300,000 KRW/tháng', highlight:true}, {label:'Hỗ trợ nhà', value:'đến 500,000 KRW/tháng'}, {label:'Visa', value:'Hỗ trợ E-7'}]}
            requirements={['Tốt nghiệp CNTT, Điện tử, Hệ thống nhúng hoặc tương đương', 'Nền tảng lập trình C/C++, Java hoặc Python', 'Giao tiếp tiếng Anh hoặc tiếng Hàn (bắt buộc)', 'Định hướng Automotive Software / Embedded System']}
            benefits={['Đào tạo 3–6 tháng về Automotive (có hỗ trợ)', 'Thưởng 2–3 lần/năm', 'Khám sức khỏe định kỳ, trợ cấp đi lại']}
            href="#register" />
          <JobCardB id="FPT402" title="AI/ML Engineer" level="1+ năm kinh nghiệm · Onsite Korea"
            tags={[{label:'Python'}, {label:'PyTorch / TF'}, {label:'MLOps', tone:'gray'}, {label:'Hot', tone:'pink'}]}
            info={[{label:'Mức lương', value:'4,000,000 – 6,000,000 KRW', highlight:true}, {label:'Hỗ trợ nhà', value:'đến 500,000 KRW/tháng'}, {label:'Visa', value:'Hỗ trợ E-7'}]}
            requirements={['1+ năm kinh nghiệm AI/ML, thành thạo Python', 'Kinh nghiệm TensorFlow, PyTorch hoặc Scikit-learn', 'Triển khai AI model thực tế, REST API / microservice', 'NLP, Computer Vision, GenAI / LLM là lợi thế']}
            benefits={['Làm việc với dự án AI quy mô lớn tại thị trường Hàn', 'Thưởng 2–3 lần/năm', 'Hỗ trợ giáo dục, CLB nội bộ']}
            href="#register" />
        </div>
      </div>
    </section>
  );
}

/* ============================ AUDIENCE ============================ */
function AudienceBlock({ tag, tagTone, title, desc, items, accent }) {
  const theme = ({
    blue:  { bg: 'var(--blue-100)',  border: 'var(--blue-200)',  tagBg: 'var(--blue-200)',  tagFg: 'var(--blue-500)',  arrow: 'var(--blue-600)' },
    pink:  { bg: 'var(--pink-100)',  border: 'var(--pink-200)',  tagBg: 'var(--pink-200)',  tagFg: 'var(--pink-600)',  arrow: 'var(--pink-600)' },
    amber: { bg: 'var(--amber-100)', border: 'var(--amber-200)', tagBg: 'var(--amber-200)', tagFg: 'var(--amber-600)', arrow: 'var(--amber-500)' },
  })[accent] || {};
  return (
    <div style={{ borderRadius: 'var(--radius-xl)', padding: '28px',
      background: theme.bg, border: `1px solid ${theme.border}` }}>
      <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-3xs)', fontWeight: 'var(--fw-bold)', letterSpacing: '1.5px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--radius-pill)', marginBottom: '16px',
        background: theme.tagBg, color: theme.tagFg }}>{tag}</span>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-extrabold)', color: 'var(--navy-800)', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-body)', lineHeight: 'var(--lh-normal)', marginBottom: '16px' }}>{desc}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, padding: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: '8px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-body)', lineHeight: 'var(--lh-normal)' }}>
            <span style={{ color: theme.arrow, fontWeight: 'var(--fw-bold)', flexShrink: 0 }}>→</span>{it}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Audience() {
  return (
    <section style={{ ...SECTION, background: 'var(--white)', borderTop: '1px solid var(--color-border)' }}>
      <div style={INNER}>
        <SectionHeadingB eyebrow="Ai nên tham gia" title="Các developer muốn tìm hiểu và ứng tuyển FPT Software Korea" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
          <AudienceBlock accent="blue" tag="Đã apply vị trí FPT" title="Bạn đang trong process"
            desc="Đây là cơ hội tìm hiểu sâu hơn về FPT Software Korea trước khi phỏng vấn chính thức."
            items={['Hiểu rõ môi trường làm việc thực tế', 'Chuẩn bị câu hỏi tốt hơn cho interview', 'Xác nhận đây có phải công ty phù hợp không']} />
          <AudienceBlock accent="pink" tag="Chưa apply vị trí FPT" title="Bạn đang cân nhắc"
            desc="Tham gia để hiểu thực tế trước khi quyết định. Nếu muốn tiếp tục, bạn sẽ nhận link apply ngay tại buổi."
            items={['Tham gia không bắt buộc phải apply', 'Nhận link JD + hướng dẫn apply nếu quan tâm', 'KTC hỗ trợ matching nếu bạn phù hợp']} />
        </div>
      </div>
    </section>
  );
}

window.CoffeeChatMid = { About, Jobs, Audience };
