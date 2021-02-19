import Link from 'next/link';
import ItemStyled from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default function Race({ race }) {
  return (
    <ItemStyled>
      <img src={race?.photo?.image?.publicUrlTransformed} alt={race.name} />
      <Title>
        <Link href={`/race/${race.id}`}>{race.name}</Link>
      </Title>
      <PriceTag>{formatMoney(race.price)}</PriceTag>
      <p>{race.description}</p>
      {/* TODO : add buttons */}
    </ItemStyled>
  );
}
