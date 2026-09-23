export const SITE = {
  url: 'https://example.com',
  title: 'Trang Viết Lặng',
  tagline: 'Tản văn, truyện ngắn và những dòng ghi chép bên lề trang sách',
  description: 'Góc nhỏ của một người thích đọc, thích viết, và thích những buổi chiều yên tĩnh.',
  greeting: 'Xin chào!',
  epigraph: {
    text: 'Văn chương là cái gì đó không nói ra được, nhưng người ta cứ cố nói.',
    source: 'Ghi chép bên lề',
  },
  author: 'Tên của bạn',
  lang: 'vi',
  locale: 'vi_VN',
  postsPerPage: 6,
};

export const NAV_LINKS = [
  { href: '/', label: 'Trang đầu' },
  { href: '/blog/', label: 'Bài viết' },
  { href: '/tags/', label: 'Chuyên mục' },
  { href: '/about/', label: 'Người viết' },
  { href: '/about/#gui-thu', label: 'Liên hệ' },
];

export const SOCIAL_LINKS = [
  { href: 'mailto:you@example.com', label: 'Thư từ' },
  { href: 'https://www.goodreads.com/', label: 'Goodreads' },
];

// Lấy các giá trị này tại https://giscus.app sau khi bật Discussions cho repo GitHub public.
export const GISCUS = {
  repo: 'your-username/your-repo',
  repoId: '',
  category: 'Announcements',
  categoryId: '',
  mapping: 'pathname',
  lang: 'vi',
};
