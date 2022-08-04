import { Card } from '../../components/Card'
import {
  BannerContainer,
  BannerItems,
  HomeContainer,
  ItemsList,
  ListContainer,
  TagContainer,
  TagIconContainer,
  TagItem,
  Wrapper,
} from './styles'

import typeExpresso from '../../assets/type-expresso.svg'
import typeAmericano from '../../assets/type-americano.svg'
import typeExpressoCremoso from '../../assets/type-expresso-cremoso.svg'
import typeCafeGelado from '../../assets/type-cafe-gelado.svg'
import typeCafeComLeite from '../../assets/type-cafe-com-leite.svg'
import typeLatte from '../../assets/type-latte.svg'
import typeCapuccino from '../../assets/type-capuccino.svg'
import typeMacchiato from '../../assets/type-macchiato.svg'
import typeMocaccino from '../../assets/type-mocaccinos.svg'
import typeChocolateQuente from '../../assets/type-chocolate-quente.svg'
import typeCubano from '../../assets/type-cubano.svg'
import typeHavaiano from '../../assets/type-havaiano.svg'
import typeArabe from '../../assets/type-arabe.svg'
import typeIrlandes from '../../assets/type-irlandes.svg'
import banner from '../../assets/banner.svg'

import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

export interface Coffee {
  id: string
  image: string
  title: string
  description: string
  price: number
  tags: string[]
}

const list: Coffee[] = [
  {
    id: '1',
    image: typeExpresso,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '2',
    image: typeAmericano,
    title: 'Expresso Americano ',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '3',
    image: typeExpressoCremoso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '4',
    image: typeCafeGelado,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: '5',
    image: typeCafeComLeite,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '6',
    image: typeLatte,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '7',
    image: typeCapuccino,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '8',
    image: typeMacchiato,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '9',
    image: typeMocaccino,
    title: 'Mocaccino',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '10',
    image: typeChocolateQuente,
    title: 'Chocolate Quente',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['especial', 'com leite'],
  },
  {
    id: '11',
    image: typeCubano,
    title: 'Cubano',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: '12',
    image: typeHavaiano,
    title: 'Havaiano',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: '13',
    image: typeArabe,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: '14',
    image: typeIrlandes,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
  },
]

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerItems>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </h2>
            <TagContainer>
              <TagItem>
                <TagIconContainer tagColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </TagIconContainer>
                <span>Compra simples e segura</span>
              </TagItem>
              <TagItem>
                <TagIconContainer tagColor="baseText">
                  <Package size={16} weight="fill" />
                </TagIconContainer>
                <span>Embalagem mantém o café intacto</span>
              </TagItem>
              <TagItem>
                <TagIconContainer tagColor="yellow">
                  <Timer size={16} weight="fill" />
                </TagIconContainer>
                <span>Entrega rápida e rastreada</span>
              </TagItem>
              <TagItem>
                <TagIconContainer tagColor="purple">
                  <CoffeeIcon size={16} weight="fill" />
                </TagIconContainer>
                <span>O café chega fresquinho até você</span>
              </TagItem>
            </TagContainer>
          </div>
          <div>
            <img src={banner} alt="" />
          </div>
        </BannerItems>
      </BannerContainer>
      <Wrapper>
        <ListContainer>
          <span>Nossos cafés</span>

          <ItemsList>
            {list.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </ItemsList>
        </ListContainer>
      </Wrapper>
    </HomeContainer>
  )
}
