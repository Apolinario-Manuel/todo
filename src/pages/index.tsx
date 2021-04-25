import Head from 'next/head'
import { Conatainer } from '../styles/pages/Home'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend} >
      <Head>
        <title>GrowthHackers</title>
      </Head>

      <main>
        <Conatainer>
          <Sidebar />
          <Body />
        </Conatainer>
      </main>

    </DndProvider>
  )
}
