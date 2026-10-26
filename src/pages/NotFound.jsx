function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>هذه الصفحة غير جاهزة بعد</h1>
      <p className="lead">
        ما زلنا نعمل على هذا الجزء من التطبيق. يمكنك العودة إلى الصفحة الرئيسية
        في الوقت الحالي.
      </p>
      <a href={import.meta.env.BASE_URL} className="btn">
        العودة إلى الرئيسية
      </a>
    </main>
  )
}

export default NotFound
