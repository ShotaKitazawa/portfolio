export const AboutMe: React.FC = ({
  children,
}) => {
  return (
    <section id="aboutme" className="mb-28">
      <div className="text-center">
        <h2 className="font-bold text-3xl tracking-tight">
          About Me
        </h2>
        <div className="text-gray-400 text-xl">
          自己紹介
        </div>
      </div>

      <div className="pt-20" />

      <div className="bg-gray-100 relative shadow-xl pb-4 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto">
        <p className="text-hidden">hidden field (for css)</p>
        <div className="flex justify-center">
          <img
            src="/images/shoshinsha-shirokuro.jpg"
            alt="my icon"
            className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"
          />
        </div>

        <div className="mt-12">
          <p className="font-bold text-center text-3xl text-gray-800">かなた / kanata</p>
          <div className="mt-2" />
          <p className="font-bold text-center text-xl text-gray-800">(北澤 祥太 / Shota Kitazawa)</p>

          <div className="my-5">
            <a href="mailto:skitazawa1121@gmail.com" className="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">
              Connect with <span className="font-bold">E-mail</span>
            </a>
          </div>

          <div className="my-5">
            <ul className="list-disc w-2/3 mx-auto">
              <li>生年月日: 🎂 1996/11/21</li>
              <li>出身: 🇯🇵 東京</li>
              <li>趣味: 🍜 ラーメン 🏂 スノボ 💻 自宅鯖構築</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
