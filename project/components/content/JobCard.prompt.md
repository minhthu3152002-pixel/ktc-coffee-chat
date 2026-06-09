Full recruitment JD card for an onsite-Korea role. Composes Badge + Button.

```jsx
<JobCard
  id="FPT401"
  title="Embedded Software Developer"
  level="Fresher / Junior · Onsite Korea"
  tags={[{label:'C/C++'}, {label:'Automotive'}, {label:'5 vị trí', tone:'green'}]}
  info={[{label:'Mức lương', value:'2,300,000 KRW/tháng', highlight:true}, {label:'Visa', value:'Hỗ trợ E-7'}]}
  requirements={['Tốt nghiệp CNTT / Điện tử', 'Nền tảng C/C++, Java hoặc Python']}
  benefits={['Đào tạo 3–6 tháng Automotive', 'Thưởng 2–3 lần/năm']}
  href="#" />
```

Lay two side-by-side in a `grid-template-columns: 1fr 1fr` row. CTA pins to the card bottom so unequal cards stay aligned.
