export default function Footer() {
    
  const currentYear = new Date().getFullYear()

  return (
    <footer className="wrapper my-[50px] lg:my-[100px] md:text-center">
        <p>&copy; {currentYear} Rekonekcija 333 Ljiljana. Developed by <a href="https://github.com/stefanelli990" target="_blank" className="text-primaryColor font-semibold">stefanelli990</a></p>
    </footer>
  )
}