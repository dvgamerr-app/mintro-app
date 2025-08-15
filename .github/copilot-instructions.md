## สรุปสั้น ๆ (สำหรับ AI agents)

- โปรเจกต์นี้เป็นเว็บสเตติกบน Astro ที่ใช้ Svelte สำหรับ UI ส่วนที่โต้ตอบในเบราว์เซอร์.
- หยิบตัวอย่าง: `src/pages/index.astro` → `src/layouts/BaseLayout.astro` → `src/components/Home.svelte` (mounted with `client:load`).

## คำสั่งสำคัญ

- ติดตั้ง: ใช้ `bun i` (มี `bun.lock`)
- พัฒนา: `bun dev`

## ข้อปฏิบัติที่ต้องรู้ (สั้น ๆ)

- ใช้ Tailwind (ไฟล์หลัก: `src/styles/global.css`).
- Dark mode ถูกควบคุมด้วยคลาส `dark` ที่ root (init ใน `BaseLayout.astro`).
- ไอคอนเป็น SVG แบบ raw: `import icon from '../assets/icons/foo.svg?raw'` → ใช้ `{@html icon}` ใน Svelte.
- ถ้าต้องการโค้ดที่ต้องรันบนเบราว์เซอร์ ให้ mount คอมโพเนนต์ด้วย `client:load`.

## ตัวอย่างงานที่ทำบ่อย

- เพิ่มหน้า: สร้าง `src/pages/your-page.astro` (Astro จะสร้าง route ให้อัตโนมัติ).
- เพิ่มคอมโพเนนต์ UI: สร้างใน `src/components/` แล้ว import ไปใช้ในหน้า/เลย์เอาต์ (ใช้ `client:load` เมื่อจำเป็น).

## กฎสำคัญ — ห้ามอธิบายโค้ดที่แก้/เขียน

- ถ้าผู้ช่วยโค้ด (AI) แก้ไขหรือเขียนไฟล์ ให้ไม่ต้องใส่คำอธิบายหรือชี้แจงโค้ดที่ตัวเองเขียนหรือแก้ไขใน commit message, PR description หรือในผลลัพธ์ของการตอบกลับนี้ โดยตรง — ส่งเฉพาะการเปลี่ยนแปลงหรือไฟล์ที่แก้เท่านั้น.

ถ้าต้องการขยายส่วนใด (เช่น รายละเอียด CI, เพิ่มตัวอย่าง PR template หรือชุดทดสอบสั้นๆ) ให้บอกส่วนที่ต้องการ ฉันจะอัปเดตให้กระชับตามนี้ต่อไป.
