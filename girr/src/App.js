import * as React from 'react';
import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd'
import {
  Rate,
  Spin,
} from 'antd';
import { Steps, Popover } from 'antd';
import { Card, Collapse, Tooltip, Modal, Button, Statistic } from 'antd';
import {
  SearchOutlined,
  ArrowUpOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
import * as Icon from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import { Descriptions, Tag, Divider } from 'antd';
// eslint-disable-next-line import/no-webpack-loader-syntax
import AfricaSVG from '!!raw-loader!./Africa.svg';
// import AfricaSVG from 'raw-loader!./Africa';

const { Step } = Steps;

const { Header, Content, Sider, Footer } = Layout;

const { Panel: AntPanel } = Collapse;

const { Countdown } = Statistic;

function Panel({children}) {
  const inp1 = React.createRef()
  const inp2 = React.createRef()
  const inp3 = React.createRef()
  // React.useLayoutEffect(() => {
  //   let h = (inp) => (ev) => {
  //     const rangePercent = ev.target.valueAsNumber
  //     inp.current.style.background=`linear-gradient(to right, green 0%, #fff ${rangePercent}%)`;
  //   }
  //   let arr = [h(inp1),h(inp2),h(inp3)]
  //   arr.map((e, i) => [inp1, inp2, inp3][i].current?.addEventListener('input', e))
  //   return () => {
  //     // inp1.current?.removeEventListener('input', h);
  //     arr.map((e, i) => [inp1, inp2, inp3][i].current?.removeEventListener('input', e))
  //   }
  // }, [inp1, inp2, inp3])
  const [end, setEnd] = React.useState(50)
  const [food, setFood] = React.useState(50)
  const [resistance, setResistance] = React.useState(50)
  const handleSlider = (h) => ev => {
    h(ev.target.valueAsNumber)
  }
  return (<>
    <div class="panel__bars">
      <div class="bar-text">hydration</div>
      <div class="bar bar--hydration">
        <div class="bar-fill" data-style="width: 50%"></div>
      </div>
      <div class="bar-text">hydration</div>
      <div class="bar bar--hunger">
        <div class="bar-fill" data-style="width: 50%"></div>
      </div>
      <div class="bar-text">hydration</div>
      <div class="bar bar--stamina">
        <div class="bar-fill" data-style="width: 50%"></div>
      </div>
    </div>
    {children}
    <div class="panel__ranges">
      <label htmlFor="temp1">wydolność</label>
      <input ref={inp1} class="range range--wydolnosc" type="range" id="temp1" name="temp" list="tickmarks"
        value={end} onInput={handleSlider(setEnd)}
        style={{linearGradient: `(to right, green 0%, #fff ${end}%`}} />
      <label htmlFor="temp2">jedzenie</label>
      <input ref={inp2} class="range range--jedzenie" type="range" id="temp2" name="temp" list="tickmarks"
        value={food} onInput={handleSlider(setFood)}
        style={{linearGradient: `(to right, green 0%, #fff ${food}%`}} />
      <label htmlFor="temp3">odporność na glód</label>
      <input ref={inp3} class="range range--odpornosc" type="range" id="temp3" name="temp" list="tickmarks"
        value={resistance} onInput={handleSlider(setResistance)}
        style={{linearGradient: `(to right, green 0%, #fff ${resistance}%`}} />
      <pre>
        {JSON.stringify({end, food, resistance}, null, 2)}
      </pre>
    </div>
    </>)
}

function Controls() {
  const [d, setD] = useState({v: 0});
  return (<Panel>
    <pre contentEditable={0 && true} onInput={ev => {
      let txt = ev.target.textContent
      // console.log('txt', txt)
      setD(JSON.parse(txt))}
    }>{JSON.stringify(d, null, 2)}</pre>
  </Panel>);
  const t = `
  return (<>
    <div>
      <div class="section">
        <Rate/>
        <Tag color="volcano">volcano</Tag>
        <Tooltip title="prompt text" color="orange" key="Orange">
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </Tooltip>
          <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
        <Chart>
        {stat}
        </Chart>
        {modal}
      </div>
    {/* <Slider/> */}
    {/* <Descriptions title="User Info">
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    </Descriptions> */}
    </div>
  </>)`
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const description = 'desc'
  const info = (<>
    <Steps current={1}>
      <Step title="Finished" description={description} />
      <Step title="In Progress" description={description} subTitle="Left 00:00:08" />
      <Step title="Waiting" description={description} />
    </Steps>
  </>)
  const modal = (<>
    <Modal title="Basic Modal"
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}>
      {info}
      <p>Some contents...</p>
      <p>Monadycznie melodyczni</p>
      {/* melodyjnio */}
    </Modal>
  </>)
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  const stat = (<>
    <Card>
      <Statistic
        title="Active"
        value={11.28}
        precision={2}
        valueStyle={{ color: '#3f8600' }}
        prefix={<ArrowUpOutlined />}
        suffix="%"
      />
    </Card>
  </>)
  const data2 = [
    {
      "Date": "2010-01",
      "scales": 1998
    },
    {
      "Date": "2010-02",
      "scales": 1850
    },
    {
      "Date": "2010-03",
      "scales": 1720
    },
    {
      "Date": "2010-04",
      "scales": 1818
    },
    {
      "Date": "2010-05",
      "scales": 1920
    },
    {
      "Date": "2010-06",
      "scales": 1802
    },
    {
      "Date": "2010-07",
      "scales": 1945
    },
    {
      "Date": "2010-08",
      "scales": 1856
    },
    {
      "Date": "2010-09",
      "scales": 2107
    },
    {
      "Date": "2010-10",
      "scales": 2140
    },
    {
      "Date": "2010-11",
      "scales": 2311
    },
    {
      "Date": "2010-12",
      "scales": 1972
    },
    {
      "Date": "2011-01",
      "scales": 1760
    },
    {
      "Date": "2011-02",
      "scales": 1824
    },
    {
      "Date": "2011-03",
      "scales": 1801
    },
    {
      "Date": "2011-04",
      "scales": 2001
    },
    {
      "Date": "2011-05",
      "scales": 1640
    },
    {
      "Date": "2011-06",
      "scales": 1502
    },
    {
      "Date": "2011-07",
      "scales": 1621
    },
    {
      "Date": "2011-08",
      "scales": 1480
    },
    {
      "Date": "2011-09",
      "scales": 1549
    },
    {
      "Date": "2011-10",
      "scales": 1390
    },
    {
      "Date": "2011-11",
      "scales": 1325
    },
    {
      "Date": "2011-12",
      "scales": 1250
    },
    {
      "Date": "2012-01",
      "scales": 1394
    },
    {
      "Date": "2012-02",
      "scales": 1406
    },
    {
      "Date": "2012-03",
      "scales": 1578
    },
    {
      "Date": "2012-04",
      "scales": 1465
    },
    {
      "Date": "2012-05",
      "scales": 1689
    },
    {
      "Date": "2012-06",
      "scales": 1755
    },
    {
      "Date": "2012-07",
      "scales": 1495
    },
    {
      "Date": "2012-08",
      "scales": 1508
    },
    {
      "Date": "2012-09",
      "scales": 1433
    },
    {
      "Date": "2012-10",
      "scales": 1344
    },
    {
      "Date": "2012-11",
      "scales": 1201
    },
    {
      "Date": "2012-12",
      "scales": 1065
    },
    {
      "Date": "2013-01",
      "scales": 1255
    },
    {
      "Date": "2013-02",
      "scales": 1429
    },
    {
      "Date": "2013-03",
      "scales": 1398
    },
    {
      "Date": "2013-04",
      "scales": 1678
    },
    {
      "Date": "2013-05",
      "scales": 1524
    },
    {
      "Date": "2013-06",
      "scales": 1688
    },
    {
      "Date": "2013-07",
      "scales": 1500
    },
    {
      "Date": "2013-08",
      "scales": 1670
    },
    {
      "Date": "2013-09",
      "scales": 1734
    },
    {
      "Date": "2013-10",
      "scales": 1699
    },
    {
      "Date": "2013-11",
      "scales": 1508
    },
    {
      "Date": "2013-12",
      "scales": 1680
    },
    {
      "Date": "2014-01",
      "scales": 1750
    },
    {
      "Date": "2014-02",
      "scales": 1602
    },
    {
      "Date": "2014-03",
      "scales": 1834
    },
    {
      "Date": "2014-04",
      "scales": 1722
    },
    {
      "Date": "2014-05",
      "scales": 1430
    },
    {
      "Date": "2014-06",
      "scales": 1280
    },
    {
      "Date": "2014-07",
      "scales": 1367
    },
    {
      "Date": "2014-08",
      "scales": 1155
    },
    {
      "Date": "2014-09",
      "scales": 1289
    },
    {
      "Date": "2014-10",
      "scales": 1104
    },
    {
      "Date": "2014-11",
      "scales": 1246
    },
    {
      "Date": "2014-12",
      "scales": 1098
    },
    {
      "Date": "2015-01",
      "scales": 1189
    },
    {
      "Date": "2015-02",
      "scales": 1276
    },
    {
      "Date": "2015-03",
      "scales": 1033
    },
    {
      "Date": "2015-04",
      "scales": 956
    },
    {
      "Date": "2015-05",
      "scales": 845
    },
    {
      "Date": "2015-06",
      "scales": 1089
    },
    {
      "Date": "2015-07",
      "scales": 944
    },
    {
      "Date": "2015-08",
      "scales": 1043
    },
    {
      "Date": "2015-09",
      "scales": 893
    },
    {
      "Date": "2015-10",
      "scales": 840
    },
    {
      "Date": "2015-11",
      "scales": 934
    },
    {
      "Date": "2015-12",
      "scales": 810
    },
    {
      "Date": "2016-01",
      "scales": 782
    },
    {
      "Date": "2016-02",
      "scales": 1089
    },
    {
      "Date": "2016-03",
      "scales": 745
    },
    {
      "Date": "2016-04",
      "scales": 680
    },
    {
      "Date": "2016-05",
      "scales": 802
    },
    {
      "Date": "2016-06",
      "scales": 697
    },
    {
      "Date": "2016-07",
      "scales": 583
    },
    {
      "Date": "2016-08",
      "scales": 456
    },
    {
      "Date": "2016-09",
      "scales": 524
    },
    {
      "Date": "2016-10",
      "scales": 398
    },
    {
      "Date": "2016-11",
      "scales": 278
    },
    {
      "Date": "2016-12",
      "scales": 195
    },
    {
      "Date": "2017-01",
      "scales": 145
    },
    {
      "Date": "2017-02",
      "scales": 207
    }
  ]
  const [data, setData] = useState(() => data2);
  const Component = React.useCallback(() => {
    const config = {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 5,
      },
    };
    return (<>
      <Line {...config} />;
    </>)
  }, [])

  const Chart = ({children}) => (<Popover placement="left" title={""}
    content={<>
      <img src="./Zrzut ekranu 2022-11-19 o 22.31.43.png"/>
    </>}
    trigger="hover">
    {/* <Button>Left</Button> */}
    {children}
    {/* <Component/> */}
  </Popover>)

  const Slider = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
      setInputValue(newValue);
    };
    return (<>
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
        </Descriptions.Item>
      </Descriptions>
    </>)
  }
  function Map() {
    return (<div className="game">
    </div>)
  }
  const [x, setX] = React.useState(365)
  const [y, setY] = React.useState(663)
  const [dex, setDeX] = React.useState(250)
  const [dey, setDeY] = React.useState(600)
  React.useEffect(() => {
    // console.info('rereg')
    const r = setInterval(() => {
      const dd = Math.abs(dex-x)
      const DD = 33;
      if (dd > 2) {
        // setX(x => x + (dex - x)/DD)
        let step = 1
        if (dd > DD) step = dd/DD
        setX(x => x + ((dex - x) > 0 ? step : -step))
      }
      const ddy = Math.abs(dey-y)
      if (ddy > 2) {
        let step = 1
        if (ddy > DD) step = ddy/DD
        // setY(y => y + (dey - y)/DD)
        setY(y => y + ((dey - y) > 0 ? step : -step))
      }
    }, 100)
    return () => {
      clearInterval(r)
    }
  }, [dex, dey, setX, setY, x, y])
  // Sempre Verde, Dual Fuel
  const misc = (
    <div className="" style={{position: 'absolute', top: '50vh', left: '50vw'}}>
      <Spin size="large" />
    </div>)
      // {misc}
  // console.log('html', AfricaSVG)
  return (<>
    <section class="giraffe">
      <div class="container">
        <div class="africa-wrapper">
          <div class="africa">
            <Africa setY={setY} setX={setX} setDeX={setDeX} setDeY={setDeY}/>
          </div>
          <div class="ball" style={{position: 'absolute', left: `${x}px`, top: `${y}px`}}></div>
        </div>
        <div class="panel">
          {/* <Panel/> */}
          <Controls/>
          <input type="number" value={dex} onInput={({target: {valueAsNumber: v}}) => setDeX(v)} />/{x}
          <br/>
          <input type="number" value={dey} onInput={({target: {valueAsNumber: v}}) => setDeY(v)} />/{y}
        </div>
      </div>
    </section>
  </>)
  return (
    // <div className="App">
      <Layout>
        <Header>
          <div>
            <Tooltip title="Pomoc">
              <Button type="primary" shape="circle" icon={<Icon.QuestionOutlined />} />
            </Tooltip>
          </div>
        </Header>

        <Layout>
          <Content>
            <Map/>
          </Content>
          <Sider>
            <Controls/>
          </Sider>
        </Layout>
        {misc}
      </Layout>
    // </div>
  );
}

function Africa({setY, setX, setDeX, setDeY}) {
  const ref = React.createRef()
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const svg = ref.current.querySelector(".africa svg");
    let h1, h2, h3, h4;
    svg.addEventListener("mouseover", h1 = (ev) => {
      console.log("ev", { el: ev.target, ev });
      const id = ev.target.getAttribute("id");
      const randomColor = ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)];
      //   const color = country2color[id];
      const color = randomColor;
      //   console.log(`['${id}']: "${color}"`);
      //   ev.target.style.fill = `${color} !important`;
      const style = ev.target.getAttribute("style");
      //   ev.target.setAttribute("style", style.replace("fill:", "fill2:"));
      ev.target.setAttribute("style", `fill:${color}`);
      //   ev.target.setAttribute("fill", `${color}`);
      //   setTimeout(() => ev.target.setAttribute("style", style), 500);
    });
    svg.addEventListener("mouseout", h2 = (ev) => {
      ev.target.setAttribute("style", `fill:#cccccc;stroke:#000000`);
    });
    document.body.addEventListener('keyup', h3 = ev => {
      ev.preventDefault()
      // const el = document.querySelector('.ball')
      // console.log('ev', ev, {el})
      // el.style.top = `${parseInt(el.style.top || 400) - 1}px`
      setY(y => y - 1)
      // setX(y => y - 1)
    })
    svg.addEventListener("click", h4 = (ev) => {
      console.log('h')
      const {x, y, width: w, height: h} = ev.target.getBoundingClientRect()
      const dx = 589-200
      const dy = 228-150
      setDeX(x + w/2 - dx)
      setDeY(y + h/2 - dy)
    })
    return () => {
      svg.removeEventListener('mouseover', h1);
      svg.removeEventListener('mouseout', h2);
      document.body.removeEventListener('keyup', h3)
      svg.removeEventListener('click', h4)
    }
  }, [ref])

    return (<div ref={ref} className='africa' dangerouslySetInnerHTML={{ __html: AfricaSVG }} />)
}

export default App;
