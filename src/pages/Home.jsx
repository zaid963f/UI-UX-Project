import { useState } from 'react'
import salonImg1 from '../img/Frame 41.png'
import salonImg2 from '../img/Frame 411.png'
import scissorsIcon from '../icons/Vector1.png'
import homeIcon from '../icons/4.png'
import heartIcon from '../icons/Vector.png'
import bookingsIcon from '../icons/calen.png'
import profileIcon from '../icons/user.png'
import pinOutline from '../icons/5.png'
import pinIcon from '../icons/location.png'
import chevronIcon from '../icons/6.png'
import logo from '../img/logo.svg'

const filters = [
  { id: 'all', label: 'الكل' },
  { id: 'top', label: 'الأعلى تقييماً' },
  { id: 'cheap', label: 'الأرخص' },
  { id: 'open', label: 'مفتوح الآن' },
]

const salons = [
  {
    id: 'basel',
    name: 'صالون باسل',
    area: 'دمشق، المزة',
    rating: 4.8,
    price: 35000,
    open: true,
    img: salonImg1,
  },
  {
    id: 'basel-2',
    name: 'صالون باسل',
    area: 'دمشق، المزة',
    rating: 4.8,
    price: 35000,
    open: true,
    img: salonImg2,
  },
]

const tabs = [
  { label: 'الرئيسية', href: '/', icon: homeIcon },
  { label: 'حجوزاتي', href: '/bookings', icon: bookingsIcon },
  { label: 'المفضلة', href: '/favorites', icon: heartIcon },
  { label: 'حسابي', href: '/profile', icon: profileIcon },
]

const formatPrice = (n) => `${n.toLocaleString('de-DE')} ل.س`

function visibleSalons(filter, query) {
  const q = query.trim()
  let list = salons.filter((s) => !q || s.name.includes(q))
  if (filter === 'open') list = list.filter((s) => s.open)
  if (filter === 'top') list = [...list].sort((a, b) => b.rating - a.rating)
  if (filter === 'cheap') list = [...list].sort((a, b) => a.price - b.price)
  return list
}

function Home() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const list = visibleSalons(filter, query)

  return (
    <div className="app">
      <header className="top-bar">
        <a href="/location" className="location" aria-label="تغيير الموقع: دمشق، المزة">
          <span className="location-pin">
            <img src={pinOutline} alt="" />
            <img src={pinIcon} alt="" className="location-dot" />
          </span>
          دمشق، المزة
          <img src={chevronIcon} alt="" className="location-chevron" />
        </a>

        <a href={import.meta.env.BASE_URL} className="brand">
          <img src={logo} alt="شعار الصالون - الصفحة الرئيسية" />
        </a>
      </header>

      <main className="content">
        <label className="search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            placeholder="ابحث عن اسم الصالون"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <a href="/salons/top" className="featured">
          <span className="featured-icon">
            <img src={scissorsIcon} alt="" />
          </span>
          <span>
            <strong>أفضل صالونات</strong>
            <small>حجز سريع • خصومات اليوم</small>
          </span>
        </a>

        <div className="chips" role="group" aria-label="تصفية الصالونات">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <section>
          <h2 className="section-title">صالونات قريبة منك</h2>
          <div className="salon-list">
            {list.map((s) => (
              <article key={s.id} className="salon-card">
                <img src={s.img} alt={s.name} className="salon-img" />
                <div className="salon-body">
                  <div className="salon-info">
                    <h3>
                      {s.name}
                      {s.open && <span className="open-dot" title="مفتوح الآن" />}
                    </h3>
                    <p className="salon-area">{s.area}</p>
                    <p className="salon-from">يبدأ من</p>
                    <p className="salon-price">{formatPrice(s.price)}</p>
                  </div>
                  <div className="salon-side">
                    <span className="rating">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" />
                      </svg>
                      {s.rating}
                    </span>
                    <a href={`/salons/${s.id}`} className="details-btn">
                      عرض التفاصيل
                    </a>
                  </div>
                </div>
              </article>
            ))}
            {list.length === 0 && <p className="empty">لا توجد صالونات مطابقة</p>}
          </div>
        </section>
      </main>

      <nav className="tab-bar" aria-label="القائمة الرئيسية">
        {tabs.map((t) => (
          <a
            key={t.label}
            href={t.href}
            className="tab"
            aria-current={t.href === '/' ? 'page' : undefined}
          >
            <img src={t.icon} alt="" />
            <span>{t.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Home
