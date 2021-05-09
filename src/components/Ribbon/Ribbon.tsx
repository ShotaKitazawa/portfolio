export const Ribbon: React.FC = ({
  children,
}) => {
  return (
    <div className="w-full fixed">
      {ribbon}
    </div>
  )
}

const ribbon = (
  <a
    className="github-fork-ribbon invisible lg:visible"
    href="https://github.com/ShotaKitazawa/portfolio"
    data-ribbon="Fork me on GitHub"
    title="Fork me on GitHub">
    Fork me on GitHub
  </a>
)
