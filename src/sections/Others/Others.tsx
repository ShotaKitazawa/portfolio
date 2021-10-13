import { others } from '../../data/others'

export const Others: React.FC = () => {
  return (
    <section id="others" className="mb-28">
      <div className="text-center">
        <h2 className="font-bold text-3xl tracking-tight">Others</h2>
        <div className="text-gray-400 text-xl">その他</div>
      </div>

      <div className="mb-8" />

      <div className="w-5/12 mx-auto text-xl shadow">
        <table className="min-w-max table-auto w-full">
          <tbody>
            {others.map(({ period, content }, i) => (
              <tr key={i}>
                <td className="text-center border">{period}</td>
                <td className="text-left border">{content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
