import { data } from './data'

export const Career: React.FC = () => {
  return (
    <section id="career" className="mb-28">
      <div className="text-center">
        <h2 className="font-bold text-3xl tracking-tight">Career</h2>
        <div className="text-gray-400 text-xl">経歴</div>
      </div>

      <div className="mb-8" />

      <div className="w-5/12 mx-auto text-xl shadow">
        <table className="min-w-max table-auto w-full">
          <tbody>
            {data.map(({ period, kind, content }, i) => (
              <tr key={i}>
                <td className="text-center border">{period}</td>
                <td className="text-center border">{kind}</td>
                <td className="text-left border">{content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
