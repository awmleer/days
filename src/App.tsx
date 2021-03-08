import styled from 'styled-components';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import moment from 'moment';
import {HeartFilled} from '@ant-design/icons'
import { BubbleHeart } from './bubble-heart';

const Container = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  color: #ab7c7c;
`

const Header = styled.div`
  padding: 36px 24px 0;
`

const Dot = styled.div`
  border-radius: 100px;
  height: 40px;
  width: 40px;
  margin-bottom: 6px;
  background-color: #f57c61;
`

const Bar = styled.div`
  height: 2px;
  border-radius: 2px;
  display: inline-block;
  background-color: #dddddd;
  margin-bottom: 6px;
`

const TopBar = styled(Bar)`
  width: 30px;
`

const BottomBar = styled(Bar)`
  width: 100px;
`

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Background = styled.div`
  border-radius: 10vw;
  width: 80vw;
  height: 80vw;
  position: absolute;
  background: #fff;
  top: calc(50vh - 40vw);
  right: -15vw;
`

const Shadow = styled.div`
  display: inline-block;
  background: #fddfd8;
  height: 8vw;
  border-radius: 4vw;
  position: absolute;
  transform: rotate(-45deg);
`

const HeartIconWrapper = styled.div`
  font-size: 80vw;
  color: #f57c61;
  position: absolute;
  top: -25vw;
  right: -12vw;
`

const JumboNumber = styled.div`
  font-size: 96px;
  font-weight: bold;
  > small {
    font-size: 24px;
    position: relative;
    bottom: 4px;
    left: 4px;
  }
`

const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;
  padding: 24px;
`

const bubbleHeartArray: null[] = []
for (let i = 0; i < 50; i++) {
  bubbleHeartArray.push(null)
}

function App() {
  const [flag, setFlag] = useState({})
  const since = useMemo(() => (
    moment('20210203', 'YYYYMMDD')
  ), [])
  const now = useMemo(() => (
    moment()
  ), [flag])

  const diffDays = now.diff(since, 'days')
  const diffSeconds = now.diff(since, 'seconds')

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag({})
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const [animating, setAnimating] = useState(false)
  console.log('animating', animating)

  async function doAnimation() {
    if (animating) {
      return
    }
    setAnimating(true)
    await new Promise<void>(resolve => {
      setTimeout(() => {resolve()}, 5000)
    })
    setAnimating(false)
  }

  return (
    <Container>
      <Header>
        <Dot/>
        <TopBar/>
        <HeaderText>
          和两块在一起
        </HeaderText>
        <BottomBar/>
      </Header>
      <Background>
        <HeartIconWrapper onClick={doAnimation}>
          <HeartFilled/>
        </HeartIconWrapper>
        <Shadow style={{width: '24vw', top: '34vw', left: '-10vw'}}/>
        <Shadow style={{width: '30vw', top: '52vw', left: '-9vw'}}/>
        <Shadow style={{width: '20vw', top: '58vw', left: '12vw'}}/>
      </Background>
      <Footer>
        <JumboNumber>
          {diffDays}
          <small>
            天
          </small>
        </JumboNumber>
        <div>
          = {diffSeconds} 秒
        </div>
        <div>
          从 2021.2.3 至今
        </div>
      </Footer>
      {animating && (
        bubbleHeartArray.map((v, index) => (
          <BubbleHeart key={index} />
        ))
      )}
    </Container>
  );
}

export default App;
