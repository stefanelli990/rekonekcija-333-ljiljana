export default function Footer() {
    
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="wrapper text-center">
        <p className="py-8 border-t border-e-gray-300 font-normal">&copy; {currentYear} Rekonekcija 333 Ljiljana. Developed by <a href="https://github.com/stefanelli990" target="_blank" className="underline">stefanelli990</a></p>
        </div>
    </footer>
  )
}