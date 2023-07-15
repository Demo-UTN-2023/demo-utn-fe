
interface Props {
  userId: number;
}

const Car = (props: Props) => {
  const { userId } = props;
  return (
    <div>Car</div>
  )
}

export default Car;