# Walkthrough — WarungPOS Mobile (5 Halaman Inti)

Dokumen ini menjelaskan alur penggunaan aplikasi mobile iOS/Android dari perspektif operasional harian warung.

## A. Alur End-to-End
1. Order masuk dari sumber order (mock/manual dulu).
2. Admin menerima order di **Order Management**.
3. Ticket tampil di **Kitchen Display** untuk dieksekusi dapur.
4. Setelah masak selesai, status order pindah ke siap handover.
5. Handover ke driver dipantau di **More/Reports** (Driver & Pickup).
6. Owner memantau performa di **Home Dashboard** dan **Laporan**.
7. Tim menjaga ketersediaan item di **Menu & Stock**.

---

## B. Walkthrough Per Halaman
## B.1 Home Dashboard
Tujuan:
- Memberi gambaran cepat kondisi operasional hari ini.

Elemen inti:
- KPI cards (total orders, revenue, active, avg time).
- Ringkasan pesanan masuk.
- Aksi cepat ke modul operasional.

State penting:
- Normal: metrik tampil.
- Data minim: tetap tampil dengan nilai default aman.

Interaksi:
- Tap kartu/modul untuk pindah ke halaman terkait.

---

## B.2 Order Management
Tujuan:
- Menjadi pusat kendali penerimaan dan progres order.

Elemen inti:
- Filter status dan platform.
- Kartu order dengan item, catatan, timer, aksi.

State penting:
- Baru → Dimasak → Siap → Selesai.
- Edge state: order ditolak.

Interaksi utama:
- **Terima**: order masuk antrean dapur.
- **Tolak**: order berhenti diproses.
- **Pesanan Siap**: menandai siap handover.

---

## B.3 Kitchen Display
Tujuan:
- Menyederhanakan eksekusi tiket dapur dan prioritas waktu.

Elemen inti:
- Ticket list dengan indikator urgensi.
- Daftar item + modifier (contoh sambal pisah).
- Tombol “Selesai Masak”.

State penting:
- Aktif (menunggu/proses) vs selesai.
- Indikator waktu tunggu untuk prioritas.

Interaksi utama:
- Tap “Selesai Masak” memindahkan status ke siap handover.

---

## B.4 Menu & Stock
Tujuan:
- Menjaga ketersediaan menu secara real-time.

Elemen inti:
- Kategori menu.
- Kartu item (harga, toggle tersedia/kosong, stok +/-).
- Indikator progres stok.

State penting:
- Tersedia, menipis, habis.
- Toggle nonaktif untuk item habis jika kebijakan bisnis mensyaratkan.

Interaksi utama:
- +/- stok.
- Toggle ketersediaan menu.

---

## B.5 More / Reports
Tujuan:
- Menampung kebutuhan laporan, handover, dan pengaturan.

Elemen inti:
- Ringkasan laporan penjualan.
- Driver & pickup card (PIN verifikasi, diserahkan).
- Pengaturan profil/platform/printer.

State penting:
- Handover pending vs done.
- Koneksi platform terhubung/belum.

Interaksi utama:
- Konfirmasi “Diserahkan”.
- Buka menu pengaturan.

---

## C. Skenario Khusus (Karena API Platform Belum Ada)
- Sumber order fase awal berasal dari mock/manual adapter.
- Semua modul tetap memakai kontrak data yang sama agar mudah diganti saat API resmi siap.
- Aksi kritikal (accept/reject/selesai) harus masuk antrean lokal jika offline.

---

## D. Checklist Validasi Operasional MVP
- Order baru muncul di Orders.
- Order diterima muncul di Kitchen.
- Selesai masak memperbarui status lintas modul.
- Stok menu berubah sesuai aksi pengguna.
- Laporan menampilkan ringkasan dari data operasional hari berjalan.

