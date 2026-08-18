# Implementation Plan — WarungPOS Mobile (iOS & Android)

## 1) Objective
Membangun aplikasi mobile iOS/Android WarungPOS berdasarkan [PRD.md](C:/Users/USER/.gemini/antigravity/scratch/warungpos-monorepo/PRD.md) dan [walkthrough.md](C:/Users/USER/.gemini/antigravity/scratch/warungpos-monorepo/walkthrough.md), dengan 5 halaman utama dan strategi adapter karena API platform resmi belum tersedia.

## 2) Current Baseline
- Sudah ada prototype web React Vite di [apps/web/](C:/Users/USER/.gemini/antigravity/scratch/warungpos-monorepo/apps/web/).
- Flow UI sudah mencakup 5 halaman, namun belum siap produksi mobile native.
- Belum ada adapter source order formal dan offline action queue.

## 3) Delivery Phases

## Phase 0 — Foundation (1 sprint)
### Scope
- Finalisasi domain model:
  - Order, OrderItem, Modifier, StockItem, DriverHandover, SalesSnapshot
- Definisi status lifecycle:
  - `baru -> diterima -> dimasak -> siap -> diserahkan -> selesai`
  - `ditolak` sebagai terminal state alternatif
- Definisi kontrak adapter source order (mock/manual dulu)
- Definisi kontrak sinkronisasi aksi (accept/reject/selesai masak/diserahkan)

### Output
- Dokumen data contract + status transition matrix
- Mock data fixtures terstandar

---

## Phase 1 — Mobile MVP Core (2–3 sprint)
### Scope
- Build 5 layar utama:
  - Order Management
  - Home Dashboard
  - Kitchen Display
  - Menu & Stock
  - More / Reports
- Bottom navigation mobile
- Shared design tokens (color, type, spacing, radius, elevation)
- Shared reusable components:
  - AppHeader, BottomNav, OrderCard, KitchenTicket, StockCard, StatusBadge, MetricCard
- State management global untuk sinkronisasi order lintas layar
- Action handlers:
  - terima/tolak order
  - selesai masak
  - update stok
  - diserahkan ke driver

### Output
- App mobile berjalan end-to-end dengan data mock/manual
- Status order konsisten lintas Orders, Kitchen, Home, More

---

## Phase 2 — Reliability & Offline (1–2 sprint)
### Scope
- Implement offline-safe action queue
- Retry policy saat koneksi kembali
- Conflict handling dasar (last-write dengan guard status)
- Event logging ringan untuk audit trail operasional

### Output
- Aksi kritikal tetap aman saat offline/intermittent network

---

## Phase 3 — Integration Readiness (1 sprint)
### Scope
- Implement adapter interface production-ready
- Persiapan plug-in API resmi platform (ketika tersedia)
- Mapping error model API ke UI state

### Output
- Integrasi API siap disambungkan tanpa redesign UI flow

## 4) Technical Workstreams

## A. Product & UX
- Validasi interaction detail tombol status
- Validasi copywriting status/error/empty state
- Finalisasi acceptance criteria per halaman

## B. App Architecture
- Module boundaries:
  - `presentation/`
  - `domain/`
  - `services/`
  - `adapters/`
  - `storage/queue/`
- Centralized state + typed events

## C. Data & Sync
- Adapter source order mock/manual
- Lifecycle reducer/state machine
- Offline action queue + persistence

## D. QA
- Test scenario lifecycle order
- Test scenario update stok
- Test scenario handover driver
- Test offline/online recovery

## 5) Acceptance Gate per Phase
- **Gate P0:** data contract + status matrix disetujui.
- **Gate P1:** 5 layar MVP jalan dan status sinkron lintas modul.
- **Gate P2:** offline queue lulus uji gangguan jaringan.
- **Gate P3:** adapter siap integrasi API resmi.

## 6) Risks & Mitigation
- API resmi belum tersedia → gunakan adapter abstraction + mock/manual source.
- Perbedaan workflow antar platform order → normalisasi status di domain layer.
- Risiko inkonsistensi state lintas layar → single source of truth + transition guard.

## 7) Suggested Execution Order (Praktis)
1. Domain model + status matrix  
2. Shared components + design tokens  
3. Orders + Kitchen integration  
4. Menu & Stock integration  
5. Home + More summary integration  
6. Offline queue hardening  
7. Integration readiness

