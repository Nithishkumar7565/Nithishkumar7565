import * as React from 'react'
import Enavbar from '../layout/Enavbar'
import HomeSwiper from '../layout/Swiper'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DataObjectIcon from '@mui/icons-material/DataObject';
import './swiper.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Link } from 'react-router-dom';
export default function Homemain() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  //https://en.wikipedia.org/wiki/Apple_Inc.
return (
    <div>
     
      <Enavbar/>
      <br></br>
      <Stack direction="row" sx={{gap:'75px'}}  >
    
     <div></div>
      <div><Link to=''>About</Link></div>
      <div><Link to='https://stores.bestbuy.com/'>Store</Link></div>
     <div ><Link to = 'https://www.poorvika.com/apple-imac-retina-4-5k-display-m1-chip-with-8-core-cpu-and-7-core-gpu-mac-os-silver-mgtf3hn-a-8gb-ram-256gb-ssd/p'>Mac</Link></div>
      <div><Link to='https://www.apple.com/ipad/'>iPad</Link></div>
      <div><Link to='https://www.samsung.com/in/'>iPhone</Link></div>
      <div><Link to='https://projectswatches.com/?msclkid=30975696ef23185889e432179176513a&utm_source=bing&utm_medium=cpc&utm_campaign=Projects%20Watches%3A%20Search%20%5BGoogle%20Build%5D&utm_term=watch%20store&utm_content=Landing%20Page'>Watch</Link></div>
      <div><Link to='https://www.apple.com/apple-vision-pro/'>Vision</Link></div>
      <div><Link to='https://www.amazon.com/s?k=airpods&ref=pd_sl_yvau1dkmn_e'>AirPods</Link></div>
      <div><Link to='https://www.walmart.com/browse/electronics/all-tvs/tvs/3944_1103592_2610183_447913/Y2F0ZWdvcnk6VFZz?adid=22222222264446363585&wmlspartner=wmtlabs&wl0=b&wl1=o&wl2=c&wl3=74904359689498&wl4=dat-2326704043468119:loc-90&wl5=143956&wl6=&wl7=&wl14=tv%20store&veh=sem&&msclkid=5041b0692bd81919c83bd4e85530e935&gclid=5041b0692bd81919c83bd4e85530e935&gclsrc=3p.ds'>TV&Home</Link></div>
      <div><Link to='https://www.apple.com/services/'>Entertainment</Link></div>
      <div><Link to='https://www.apple.com/shop/accessories/all'>Accessories</Link></div>
      <div><Link to='https://support.apple.com/'>Support</Link></div>
     
      </Stack>
     
   
     <HomeSwiper/>
       
   <div className='imag'>
    <Container maxWidth="l">
      <br></br>
      <Stack direction="row" sx={{gap:'75px'}}>
     <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 150
              
         }}
       // image="https://tse4.mm.bing.net/th?id=OIP.lTfiV-u8ZsBWpMEjJC7zOgHaEF&pid=Api&P=0&h=180"
       image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPU72?wid=532&hei=582&fmt=png-alpha&.v=1636763768000"
        title="Watches"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Watch
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The most rugged and capable Apple Watch ever. A robust titanium case design. 
        Precision dual-frequency GPS.is was
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 150
              
         }}
        image="https://tse3.mm.bing.net/th?id=OIP.Z9jR3pDaMcv8YF5rSeYBpgHaEo&pid=Api&P=0&h=180"
        title="VIVO "
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         VIVO
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Fast FlashCharge, Long Battery Life
With smart, safe charging algorithm 
doubling the industry standard battery life.

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 150
              
         }}

        image="https://tse1.mm.bing.net/th?id=OIP.kdhG8IzMPrIe4XSXObVA_AHaEK&pid=Api&P=0&h=180"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          APPLE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 150
              
         }}
        image="https://tse3.mm.bing.net/th?id=OIP.cIyGcqM3jAlotPiAaea3fQHaEo&pid=Api&P=0&h=180"
        title="One^+"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          OnePlus
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Stack>
      <br></br>
      
      <Stack direction="row" sx={{gap:'75px'}}>
      <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 150
              
         }}
        image="https://tse4.mm.bing.net/th?id=OIP.FOdz5mK71KGA_gNYxyH1AAHaEo&pid=Api&P=0&h=180"
        title="LapTop"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         LapTop
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ProArt Studiobook is a mighty mobile powerhouse with extreme performance, professional-grade Quadro/GeForce graphics
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 150
              
         }}
        image="https://tse1.mm.bing.net/th?id=OIP.8zwne0-QVfHUjEIVE0SgMwHaE8&pid=Api&P=0&h=180"
        title="NkGroups"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          NkGroups
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Store. The best way to buy the products you love.
        We’re available anytime..Run your business.SHOP NOW "COME ON" 
      welcome on  nk groups.*NK GROUPS*
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 150
              
         }}
        image="https://imagens3.ne10.uol.com.br/blogsne10/mundobit/uploads/2012/12/flatscreen-Apple-iTV.jpg"
        title="Tv&Home"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Tv&Home
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bring media content to life in vivid, vibrant Full HD 1080p resolution 
        by playing it on the Samsung 32" Class N5300 Smart LED TV. 
        LED-backlit LCD TV - Full HD
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height:  150
              
         }}
        image="https://tse4.mm.bing.net/th?id=OIP.j0CRI6eSABVvnbpPckigsAHaE8&pid=Api&P=0&h=180"
        title="ALL IN ONE"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          SONY
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Sony is well known as a leader in entertainment, audio, 
        and photography equipment. Sony's product  televisions,
         gaming systems, cameras and more.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
        
      </Stack>

    </Container>
    
    </div>
    <div className="footer-cont1">
        <div className="footer-cont">
          <div className="f-social">
            <a href="https://www.instagram.com/nithish_nk_7" className="instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="https://twitter.com/@Nithish66623723" className="twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="https://www.linkedin.com/in/nithish-kumar-96297a24a/" className="linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="https://github.com/Nithishkumar7565" className="github" title="Github" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="mailto:nithishkumar57985@gmail.com" className="mail" title="Mail" rel="noopener noreferrer">
              <MailOutlineIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
          </div>
          <div className="copy-txt">©Copyright All rights reserved</div>
          </div>
          </div>
    
    
    </div>
    
       
   
   
       
  
  )
}

   
       
