# Blog cá nhân (Astro)

Blog tĩnh xây dựng bằng Astro 7, Tailwind CSS 4, Pagefind (tìm kiếm) và Giscus (bình luận).

## Lệnh

| Lệnh              | Mô tả                                              |
| ----------------- | -------------------------------------------------- |
| `npm install`     | Cài dependency                                     |
| `npm run dev`     | Chạy dev tại `http://localhost:4321` (hiện cả nháp) |
| `npm run build`   | Build ra `dist/` và tạo chỉ mục tìm kiếm Pagefind  |
| `npm run preview` | Xem bản build (dùng để thử tìm kiếm)               |
| `npm run check`   | Kiểm tra kiểu TypeScript / Astro                   |

## Viết bài

Tạo file `.md` hoặc `.mdx` trong `src/content/blog/`. Tên file chính là URL (`/blog/ten-file/`).

```md
---
title: 'Tiêu đề'
description: 'Mô tả ngắn'
pubDate: 2026-09-23
updatedDate: 2026-09-30 # tuỳ chọn
tags: ['Lập trình', 'Astro']
heroImage: ./anh-bia.jpg # tuỳ chọn, đường dẫn tương đối
draft: true # tuỳ chọn, ẩn khi build production
---
```

## Cấu hình

Sửa `src/consts.ts`:

- `SITE`: tên blog, mô tả, tác giả, **`url`** (domain thật, dùng cho RSS/sitemap/SEO), số bài mỗi trang
- `NAV_LINKS`, `SOCIAL_LINKS`: menu và liên kết mạng xã hội
- `GISCUS`: bình luận. Cần repo GitHub public, bật Discussions, cài app [giscus](https://github.com/apps/giscus), rồi lấy `repoId` và `categoryId` tại [giscus.app](https://giscus.app)

Trang giới thiệu: `src/pages/about.astro`.

## Deploy

- **Vercel**: import repo, cấu hình có sẵn trong `vercel.json`
- **Netlify**: import repo, cấu hình có sẵn trong `netlify.toml`
- Build command: `npm run build`, thư mục output: `dist`, Node >= 22.12
