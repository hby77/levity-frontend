import { motion } from "framer-motion"
import { Link } from "react-router-dom"



const PicLeft = ({ subtitle, title, description, button, picture, color, titlecolor }) => {

  return (
      <div className={`relative mt-20 bg-[${color}]`}>
        <div
          className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
        >
          <motion.img
            initial={{ scale: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="h-full w-full object-cover py-5 px-5"
            src={picture}
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-full py-8 sm:py-32 lg:py-40 lg:px-32">
          <div
            className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32 "
          >
            <motion.h2
              initial={{ scale: 0 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="text-base font-semibold leading-7 text-[#474d53]">
              {subtitle}
            </motion.h2>
            <motion.h2
              initial={{ scale: 0 }}
              transition={{ ease: "easeOut", duration: 0.7 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className={`mt-2 text-3xl font-black tracking-wide text-[${titlecolor}] sm:text-6xl`}>
              {title}
            </motion.h2>
            <motion.p
              initial={{ scale: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="mt-6 text-xl font-base tracking-wide leading-7 text-[#474d53]">{description}
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="mt-8">
              <Link to="/">
              <div>
                <button className="bg-[#e7e9ea] transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl">
                <svg className="ml-2.5 w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </button>
                {button}
              </div>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
  )
}

export default PicLeft

