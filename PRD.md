# PRD — WarungPOS Mobile (iOS & Android)

## 1) Ringkasan
WarungPOS adalah aplikasi operasional warung untuk menerima pesanan lintas platform, mengelola antrean dapur, memantau stok menu, dan menjalankan handover ke driver dengan cepat. Target utama produk adalah **mobile app iOS + Android**. Web digunakan hanya sebagai pendukung internal.

Dokumen ini mencakup 5 halaman inti:
1. Order Management  
2. Home Dashboard  
3. Kitchen Display  
4. Menu & Stock  
5. More / Reports

---

## 2) Tujuan Produk
### Tujuan utama
- Mempercepat siklus pesanan: masuk → dimasak → siap diambil → selesai.
- Mengurangi human error pada dapur dan stok.
- Menjaga keterbacaan UI dalam ritme operasional tinggi (warung aktif).
- Menyediakan laporan harian ringkas untuk keputusan cepat.

### Non-goals (fase saat ini)
- Integrasi langsung API GoFood/Shopee/Grab produksi (belum tersedia).
- Otomasi settlement/rekonsiliasi keuangan penuh.

---

## 3) Persona & Konteks Penggunaan
- **Owner/Manager Warung**: memantau performa, laporan, koneksi platform.
- **Admin Kasir**: menerima/tolak order, memonitor status order.
- **Tim Dapur**: fokus ke antrean masak dan penyelesaian tiket.

Konteks penggunaan:
- Mobile-first, tangan sering basah/berminyak, interaksi cepat, noise tinggi.
- Butuh elemen besar, kontras jelas, status mudah dipindai.

---

## 4) Information Architecture & Navigasi
Bottom navigation utama:
- Home
- Orders
- Kitchen
- Menu
- More

Navigasi bersifat flat, perpindahan layar cepat, tanpa nested flow panjang.

---

## 5) Kebutuhan Fungsional per Halaman
## 5.1 Order Management
- Menampilkan daftar order aktif dengan sumber platform.
- Filter status (Semua, Baru, Dimasak, Siap, Selesai).
- Filter platform (Semua, GoFood, GrabFood, ShopeeFood, Dine-in).
- Aksi:
  - Baru: Terima / Tolak
  - Dimasak: Tandai “Pesanan Siap”
- Menampilkan item order, catatan khusus, dan indikator waktu tunggu.

## 5.2 Home Dashboard
- Ringkasan KPI harian (total order, revenue, active, avg time).
- Daftar pesanan masuk prioritas.
- Quick actions ke modul utama.
- Header status harian (tanggal, notifikasi).

## 5.3 Kitchen Display
- Menampilkan tiket dapur aktif dengan prioritas visual (urgensi waktu).
- Menampilkan item per tiket + modifier (contoh: sambal pisah).
- Aksi utama: “Selesai Masak”.
- Status tiket wajib sinkron dengan alur Order Management.

## 5.4 Menu & Stock
- Daftar item menu per kategori.
- Toggle ketersediaan item (tersedia/kosong).
- Ubah stok cepat (+/-).
- Menampilkan progres stok terhadap batas.
- State visual jelas untuk stok menipis/habis.

## 5.5 More / Reports
- Laporan penjualan ringkas (total pendapatan + distribusi kanal).
- Driver & pickup handover (PIN verifikasi, aksi diserahkan).
- Pengaturan warung/platform/printer.
- Logout.

---

## 6) Kebutuhan Lintas Halaman
- **Notifikasi**: indikator order baru dan perubahan status.
- **Offline-safe action queue**: aksi kritikal (accept/reject/selesai) masuk antrean lokal saat jaringan buruk.
- **Sinkronisasi status**: perubahan di Orders harus konsisten di Kitchen/Home.
- **Audit trail ringan**: jejak status transition per order.
- **Design consistency**: token warna/typography/spacing mengikuti design system “WarungPOS Editorial”.

---

## 7) Strategi Integrasi Platform (Tanpa API Resmi)
Karena API resmi platform merchant belum tersedia:
- Gunakan **Order Source Adapter Interface** (abstraksi sumber order).
- Fase awal gunakan:
  - Mock adapter (data simulasi)
  - Manual input adapter (opsional operasional)
- Saat API tersedia, integrasi dilakukan dengan adapter baru tanpa mengubah flow UI inti.

---

## 8) Non-Functional Requirements
- Responsif untuk layar mobile umum iOS/Android.
- Waktu render awal cepat pada device menengah.
- State update harus deterministik (tanpa status lompat).
- Aksesibilitas minimum:
  - target tap cukup besar
  - kontras teks memadai
  - icon + label tidak ambigu

---

## 9) Acceptance Criteria (MVP)
### AC-1 Order lifecycle
Order baru dapat diterima/ditolak, masuk status sesuai, dan terlihat konsisten di modul terkait.

### AC-2 Kitchen execution
Ticket dapur dapat ditandai selesai; status pesanan ikut berubah.

### AC-3 Stock control
Perubahan stok tercermin real-time di Menu & Stock dengan indikator visual benar.

### AC-4 Reporting snapshot
More/Reports menampilkan ringkasan metrik harian dari data operasional.

### AC-5 Offline resilience
Aksi kritikal tetap tersimpan saat offline dan dikirim ulang saat koneksi kembali.

---

## 10) Gap vs Implementasi Saat Ini (React Vite Web)
Temuan saat ini:
- Sudah ada 5 halaman dan routing dasar di web.
- UI sebagian belum 1:1 dengan HTML referensi final per halaman.
- Belum ada arsitektur mobile-native iOS/Android.
- Belum ada layer adapter sumber order formal.
- Belum ada mekanisme offline queue untuk aksi kritikal.
- Status sinkron antar halaman masih statis/mock.

Prioritas gap:
1. Samakan requirement produk final + definisi status lifecycle.
2. Bentuk domain model dan state flow lintas modul.
3. Implement adapter sumber order (mock/manual dulu).
4. Siapkan fondasi mobile app (stack dipilih di fase implementasi).

---

## 11) Roadmap Fase
- **Fase 0 (Now):** validasi PRD + walkthrough + data contract.
- **Fase 1 (MVP mobile):** 5 layar inti + lifecycle order + stock ops + report snapshot.
- **Fase 2:** hardening offline sync + telemetry + integrasi API resmi ketika tersedia.

---

## 12) Risiko & Dependensi
- Risiko utama: ketidaktersediaan API platform resmi.
- Mitigasi: adapter pattern + mock/manual source.
- Dependensi: keputusan stack mobile, backend endpoint internal, definisi status order final.

