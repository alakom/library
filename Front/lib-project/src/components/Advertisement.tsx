import React from 'react';
import styled from "styled-components";

const Gallery = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 25px;
  pointer-events: none;
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;
const Wide = styled.div`
  grid-column: span 4;
  grid-row: span 2;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  
`;
const Narrow = styled.div`
  grid-column: span 2;
  grid-row: span 1;
  background: #C680C6;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;


export function Advertisement(){
    return (
        <Gallery>
         <Wide style ={{background: '#F1EBE5'}}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-yhrTbcTSXrzwoA-hzaA7iAIuSqdOxakvLBvStiH4y1K4f8ADsjFF-qhFilZRxBC4gNIQ0oa-0ig4oHdO6H1ETEfbCYlg=w1860-h925" alt="Advertisement" style={{width: '100%',height: '100%',objectFit: 'scale-down'}} /></Wide>
         <Narrow style ={{background: '#2E324F'}}><img src="https://lh3.googleusercontent.com/fife/AKsag4M4xhyX5MGEL1ki3dBOcdzm88LPypFfpvu7MIM_TPy6sj-icnEvFmib-oMvHQohCS1vSX0_519av9zZ7-uMxvB3XEyBK0xv_RzI9XjfE2O_qEwr_HQAt2RRXJWq36zB9cr29j2tni2WdIOKuL3vvfE2QTRKAu9SNgyDuJsUUZO8lCg5jBeQ-sDWPFfz8xpasiXUedeonmi23_mAd9Lgej-UAs-zJ2qhW0a5ZQJ4WZUhNBG01KlFtEJ51WgVT4E8NGpEBWry4C2wHY1jcdOVz6Cny6nhK6ZipJmZot_s2f5IEQGVhXtJ95b3wTIuZ3t-HSpIkPI-NxKx4CtghFbwXueIHRNk7R0MeHZIFPXyrGLcUvkA_lOnh-8lGKs-e3FlIosdh-8-rSgSgSvjFFAuMmHwnex42g5CXAIZAe5fosBF4s6Ibi9zniXGEN7dEcBg76U0kKXtPH1dlncLw6CM7PgZ7QK9n4OJ9Glc-bGOGk4ZX5mTL4XACnPmSLbUmkZHxtudry_p3xFhvhQanEMaFQEkAtGWKv-mJ8_QhnyI4MZY2jI3zdpC74QSR1JHYydHnGOGLgHzR4vEMNGV-vhE2ciHbQapVtlveON1066M3pWbF_-wd5aIpbJy4a7hIts9wxJvNMnq_TWzziRabS0MOFDFaYhNCOPkHYsm7-VwcGwjfLTp10ZI94-mLLz4dp6Kv_8XrSwpHy10735fhZI1X02pFntA4s9yOWRK45UPJgJ1lRevhBsQrRMXcJ1g3wDvfPJTyVh6ytusVNQzRCQz_8GyvdMu-zKO0lyoS9vRis35DKyRAVabK2_sHHe1led6TC00JFYD3o7izeSCIj8ih-Q633UERX8vL3Y8csAJUUhzs7-065mNpsqORVasWc38Bm7_9bHyYi0nZwrlKMIjZLQtPCxdVgewDBbf15mXm0WvVmaNyv4eTAlMoWyjRGmqtkCI4tuNY_Hf_6jXhcv53KVb5_bXjMOR8BjA2-8Ug9zdvuLA-OA8_vv7EmfLYijqJeV1eBPICULdYpyzDs6oWqqLVv1KXabLPr8eS2aOA-Z9mO72Qi1SgRuwL50h4cq2wDhQ_ilB5M6LPOrcGilriBsAGtwbEvX78Yj2MAspNnhMvEE_Nuld2zmoF90vO48p8Yo0ZtmrmV6HI5NePFde7P2PpXpWJwgs8UfTBJIkolmaR1plp_2YJiYQuqwVFU76BGeFkh5sTDbeh2mZP-1PGRzY_fazc-7_bVdRiBiWddZxWm0y9yUj9CnWdtCDL_9oS6H7iKGRKk06SMNjBLd6omEXChF19qxQRjwxssqfllZfdy3yE2MUDJ_gM4GPi82Bh-Ua-jFmgIyonJJ0aPqEy52IxgHUAxioYVvu2YYRBesExRsqNIbNwKYpB_6_BsMxRlACOLvyjo5MSADA0QwS1qNRU4Ya9_ZftE4BNVCVmxeR1iVv3mcZXQ7yVMX1bDt7qOnzMVai4NP4gd36a4-T45rmJBJs_rV-HIZPmDPZmLXaQGFhcARZGEqzWwylSl9NaFmglwI-=w1860-h925" alt="Advertisement" style={{width: '100%',height: '100%',objectFit: 'contain'}} /></Narrow>
         <Narrow style ={{background: '#C680C6'}}><img src="https://lh3.googleusercontent.com/fife/AKsag4P2LWweWrpbDArPkKuSe2IBtgcncjYrdnNYCmZvC3rxg3VZoEJ-PyXHZ7ZzmERJDEAz66EaM_G6bQTgIiAece9yniuZbJpqRhY3_1xs1pfYisBjjRZi3PQnnIW_nGdRmIBRt4cZnCkIU99gRSgLhr12myBuVIYqTXoMe4yKqh1Y96v_ALcTNl5OphW1hzIoiThA-2_olZ027KPAjpb56HwN5HOLtWuhAP142FCuqRgsj4VPEdYQw-4gSg61CYZtnzRp_jNKDSzWUKVqrBFT4Moph5oPs63l6sdbBS7mlWQVc9P2wq6ChgJm1RrE9nxyW4hsk7WAJP2340Wv2oe_F_YlfqUm7_pJJKZ2OPKt65wKYsUhE8J_fB4zDqdhPkaxLG7WKqa9gzWHpdsEkuIuVhP-qHBc-4kf3aiZTyFZb9qKGiUkgfnaIRXruIbXUTNLG1w2-Ff94w2KPrVI77FuDl2VUUiA2-qWY1fWbs5rAEQWh6S48dfnS3UpBh_jJDrwKnXLS2uFpxXNN2he1CeD0HfurJ4e6xRudveO5pAe8vcUrAaOmj2cuSdm2ArfInKzbPooqSp4KTgW8ksuV7oqPEM3WARvwFFbPVg_qah-AfvmcSNUWPUNZ1-6g-UDQRJHkZ_Z7fHnENL0l5li550IJxvIi-l1FFWd1GssW9puxqEhRbYZCeM9L2KuSCqkmtO1ZFvLLkDfjYIe-U13j8KRbyetdvA11gXbCgQBuZLDCExMIkfzvIxeHan4KKsFXa2Su5xy37v8_EBNTgi9Rt87hNe3v1nDG6eyG4_IS38Xo5HuwE6FjR7opFTWDcc1n1SiLrd81u4KIQVD4rMW_3bjJQoAQiEa-3oZguSAdFNIFMT59QXv2ABCKXo6dEJ2fVAYFGRwkgA52eqqG9l6qo6bs789VezAREru1l_O9Psxx-bV4e1EUhXKcFXq6HlpSWJcI6npGg8dyDRg7tWeWyP_0kN0LZ5-gdcGBHmUWmR24YLHX5Y_GVAyV6hNCQY7HXgEYx68erSej9g-bzkZVOTQm2p7Wz7UbdtkPy21_WeWWojne-O9AzaBzjcycK1p6vc23Jct8wMqZCtdNqGdBv6aAvIlgAnjhY63mPmh47LLprLmnEDM6VcaA44kT5ZJYR2_-fBbH4doPq9lgIG11xqAb1kBHFmE9yWEAGEdLjm4uX8JK8jE3oYy28P0NHRG8cPl2p_ZME73HLhvpaMpfIJIes9ulo8H1HPLsOLqNgOCOwFFbRL9cENhnZEvuHSaanl5_jOrT5VR5R3rmZKu0uuW6rMtMWyVeJ2E8qzk3WedZXSVBsvs_5BrpIrNMoQJO-2LI4VQ0PSpQTyQDnf8WAFL9KLxbOcWFl_H3y-ArM6AhsvG_JafOUzY0avavAj5oq-fmHZLyNvaG-aYZGUVww4Ip1ttF1he_pgFMc6JfDkWb7wqw5edOu-1EkALxXeqHXI-UOAvhS74fN2gKZhhFuS45m3hz0bsXq88ERIc7og0K-lfFTxEjCmV1t2ofmVMhcQO1Aq14qwi=w1860-h925" alt="Advertisement" style={{width: '100%',height: '100%',objectFit: 'contain'}} /></Narrow>  
        </Gallery>
    );
}