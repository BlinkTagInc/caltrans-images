export default function Index() {
  return (
    <>
      <h1>Caltrans Proxy</h1>
      <p>
        A proxy to get CalTrans camera images over https. To use, just replace `http://cwwp2.dot.ca.gov` with `https://caltrans.blinktag.com/api`.
      </p>

      <div>
        <img src="https://caltrans.blinktag.com/api/data/d4/cctv/image/tvd32i80baybridgesastowereast/tvd32i80baybridgesastowereast.jpg" />
      </div>

      <p>For example, to request the image:</p>
      <code>http://cwwp2.dot.ca.gov/data/d4/cctv/image/tvd32i80baybridgesastowereast/tvd32i80baybridgesastowereast.jpg</code>
      <p>use:</p>
      <code>https://caltrans.blinktag.com/api/data/d4/cctv/image/tvd32i80baybridgesastowereast/tvd32i80baybridgesastowereast.jpg</code>
    </>
  )
}
