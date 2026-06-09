# KTC 2026 × FPT Software Korea — Coffee Chat

Landing page tuyển dụng IT developer Việt Nam cho các vị trí onsite tại Hàn Quốc,
cho phép đăng ký buổi **Coffee Chat** online với FPT Software Korea. 100% tiếng Việt,
hỗ trợ phiên dịch Việt–Hàn.

Trang được dựng theo **KTC × FPT Coffee Chat Design System**:

- **Màu mandate:** Navy `#0F2050` · Blue `#1A56DB` · Pink `#EC174C` · Cyan `#0E8BFD`
- **Display font:** SVN-Servetica (served locally, fallback Helvetica) · **Body:** Be Vietnam Pro
- **Iconography:** bộ icon gradient-duotone "glassy" (inline SVG, 8 glyph) thay cho emoji
  wayfinding — chỉ giữ 🎉 ở success state
- Theme sáng, shadow xanh nhạt, layout `1100px` 2 cột (content + form sticky)

## Cấu trúc

- `index.html` — toàn bộ trang (self-contained, link 1 file)
- `assets/fonts/` — SVN-Servetica Thin + Medium (`.otf`, brand-supplied)
- `assets/logos/` — logo thật: lockup KTC×FPT, FPT Software Korea, dải partners

> Các file binary font/logo cần được thả vào `assets/` (xem README trong từng thư mục).
> Mọi tham chiếu đều có fallback nên trang vẫn hiển thị nguyên vẹn khi chưa có binary.
