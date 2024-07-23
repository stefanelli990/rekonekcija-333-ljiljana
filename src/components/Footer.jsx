export default function Footer() {
    
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="wrapper text-center py-8 font-normal border-t border-e-gray-300">
        <p>&copy; {currentYear} Rekonekcija 333 Ljiljana. Developed by <a href="https://github.com/stefanelli990" target="_blank" className="underline">stefanelli990</a></p>
        </div>
    </footer>
  )
}