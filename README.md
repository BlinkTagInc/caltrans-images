# Caltrans CCTV API

This will proxy requests for Caltrans CCTV images of highways and bridges and respond via https.  To use, just replace `http://cwwp2.dot.ca.gov` with `https://caltrans.blinktag.com/api`.

For example, to request the image:
```
http://cwwp2.dot.ca.gov/data/d4/cctv/image/tvd32i80baybridgesastowereast/tvd32i80baybridgesastowereast.jpg
```

use:
```
https://caltrans.blinktag.com/api/data/d4/cctv/image/tvd32i80baybridgesastowereast/tvd32i80baybridgesastowereast.jpg
```

You can find a list of cameras here: http://cwwp2.dot.ca.gov/documentation/cctv/cctv.htm
