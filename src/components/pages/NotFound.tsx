const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center shadow-md">
      <div className="inline-grid *:[grid-area:1/1]">
        <div className="status status-error p-20 animate-ping"></div>
      </div>
      <p className="text-4xl">{'Page not found :('}</p>
    </div>
  )
}

export default NotFound