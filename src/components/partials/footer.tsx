export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-12 border-t dark:bg-black dark:text-white dark:border-gray-700">
        All rights reserved &copy; {new Date().getFullYear()}
    </footer>
  )
}
