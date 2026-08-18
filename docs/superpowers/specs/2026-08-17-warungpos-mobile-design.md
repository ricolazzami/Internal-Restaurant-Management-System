# WarungPOS Mobile Design Spec (Approved Brainstorm Output)

## Scope yang disepakati
- Menyusun dokumen produk untuk **5 halaman**:
  1. Order Management
  2. Home Dashboard
  3. Kitchen Display
  4. Menu & Stock
  5. More / Reports
- Output utama di root repo:
  - `PRD.md`
  - `walkthrough.md`

## Keputusan desain utama
- Target produk utama: **mobile iOS + Android**.
- Walkthrough diarahkan ke **arsitektur mobile final** (bukan sekadar web prototype).
- Framework mobile tetap **netral** pada tahap PRD (belum lock Flutter/React Native).
- API resmi GoFood/Shopee belum tersedia, sehingga fase awal memakai **adapter sumber order** (mock/manual), dengan desain siap plug-in API resmi ke depan.

## Struktur dokumen
- PRD berisi:
  - tujuan produk
  - persona/use case
  - kebutuhan fungsional 5 halaman
  - kebutuhan non-fungsional
  - acceptance criteria
  - gap implementasi saat ini vs target
  - roadmap fase
- Walkthrough berisi:
  - alur end-to-end operasional
  - walkthrough per halaman
  - state/event/transisi
  - skenario tanpa API resmi

## Catatan kualitas
- UI/UX mengikuti design language WarungPOS Editorial (flying papers, warm neutral, hierarchy editorial).
- Prioritas pada kejelasan status order, kecepatan interaksi, dan konsistensi lintas modul.

