# node-devcontainer-guide

โปรเจกต์นี้ออกแบบมาเพื่อ **สอนหลักการทำงานของ Dev Container** ผ่านตัวอย่าง Node.js จริง ๆ โดยใช้ VS Code + Docker

## ทำไมต้อง Dev Container?
- **สภาพแวดล้อมเหมือนกันทุกคน**: ลดปัญหา "บนเครื่องฉันรันได้" เพราะทุกอย่างนิยามไว้ในคอนเทนเนอร์
- **ตั้งค่าครั้งเดียว**: เปิดโปรเจกต์ครั้งแรกก็พร้อม dev—extensions, Node version, และ dependencies จะถูกจัดการให้
- **ปลอดภัย/แยกขาด**: ไม่ปนกับระบบหลักของเครื่องผู้เรียน

## ภาพรวมการทำงาน
1. VS Code อ่าน `.devcontainer/devcontainer.json`
2. Dev Container เรียกใช้ service `app` จาก `docker-compose.yml`
3. โค้ดจากโฟลเดอร์เมานต์เข้า `/workspace`
4. เปิดพอร์ต 6000 กลับมาที่ localhost ()

## ไฟล์สำคัญ
- `devcontainer.json` – หัวใจของ Dev Container: เวอร์ชัน Node, VS Code extensions, คำสั่งเตรียมเครื่อง, พอร์ตที่ต้องเปิด
- `Dockerfile` *(ตัวเลือก)* – ใช้เมื่อจำเป็นต้อง custom



## วิธีติดตั้ง Dev Container ใน VS Code
1. เปิด VS Code → ไปที่ Extensions
2. ค้นหาและติดตั้ง Dev Containers (จาก Microsoft)



## วิธีเริ่มใช้งาน
1. เปิดโปรเจกต์นี้ → VS Code จะถามให้ Reopen in Container
2. หากไม่ขึ้นอัตโนมัติ: กด Ctrl+Shift+P (หรือ Cmd+Shift+P บน macOS) → พิมพ์ Dev Containers: Reopen in Container
3. ติดตั้ง dependencies 
   ```bash
   npm install
   ```
   จากนั้นรัน:
   ```bash
   npm run dev
   ```


