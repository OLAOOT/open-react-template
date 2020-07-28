import React from 'react'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TopImage from "../../components/sections/TopImage";

import pio1 from "./../../img/piolink01_01.jpg";
import pio2 from "./../../img/piolink01_02.jpg";
import pio3 from "./../../img/piolink01_03.jpg";
import pio4 from "./../../img/piolink01_04.jpg";

import "../../css/hardware.css";



  const img_data = [
    {
      image: './../../img/slider1.jpg',
      title: "보안",
    }
  ];

export default function Hardware2() {    
    
    return (
      <div>
        {img_data.map((v,i) => (
          <TopImage data={v} key={i} />
        ))}
        <div className="hardware_container">
            <div className="article">
                <div className="article_top">
                    <div>
                        <p>WEBFRONT-K : 웹 애플리케이션 방화벽</p>
                    </div>
                </div>
                <div className="article_top">
                    <div>
                        <span>왜 파이오링크 웹 방화벽인가?</span>
                    </div>
                </div>
                <div className="article_mid">
                    <div>
                        국내 ADC(Application Delivery Controller) 시장 1위를 차지하고 있는 파이오링크는 애플리케이션과 네트워크 기술에 대한 독보적인 우수성을 인정받고 있습니다. 
                        파이오링크는 고성능과 보안을 동시에 제공할 수 있는 웹 방화벽을 위해 최적화된 전문 플랫폼과 보안기술을 접목하고 통신서비스, 
                        온라인 쇼핑, 금융, 전자정부, 게임, 교육 등 고성능과 고신뢰성이 필요한 웹 방화벽 시장에서 수 많은 고객에게 안전한 웹 서비스를 제공하고 있습니다.
                        <br/><br/>
                        <strong>웹 방화벽의 선택 기준은 빠른 서비스 응답을 보장하는 고성능과 보안성입니다.</strong>
                        <br/><br/>
                        고성능 웹 방화벽의 대명사 파이오링크 WEBFRONT-K는 이상적인 웹 방화벽의 미래를 제시합니다.
                    </div>
                </div>
                <div className="article_top">
                    <div>
                        <span>WEBFRONT-K로 더 빠르게</span>
                    </div>                    
                </div>
                <div className="article_mid">
                    <div>
                        <ul>
                            <li>웹 방화벽 최초 12Gbps throughput으로 포털, 금융, 게임, 쇼핑 사이트 등 고성능 웹 서비스 환경에서 안정적입니다.</li>
                            <li>최대 20,000,000개 세션이 동시에 접속할 수 있으며, 트래픽 폭주 및 DDoS 등 네트워크 안정 위협 상황에서도 서버 보호 및 끊김 없는 서비스 보장이 가능합니다.</li>
                            <li>독립적 H/W 기반 SSL 가속 및 보안성 높은 RSA 2,048bit key 처리에서도 안정적인 처리성능을 보장합니다.</li>
                            <li>SSL 통신에 사용되는 RSA key는 1,024bit과 2,048bit 등의 크기를 가지며, key size가 클수록 더 높은 보안성을 제공합니다.</li>
                            <li>1,024bit key는 보안 취약점이 보고된 바 있어, 최근에는 보다 안전한 SSL 통신을 위해 2,048 bit key 사용을 권장하고 있습니다.</li>
                        </ul>
                    </div>
                    <img src={pio1}/>
                </div>
                <div className="article_top">
                    <div>
                        <span>성능 및 용량 업그레이드!</span>
                    </div>  
                </div>
                <div className="article_mid">
                    <div>
                        고성능 웹방화벽의 대표- 미션 크리티컬 사이트 도입 1위인, 기존 WEBFRONT와 비교해 보십시오.
                        WEBFRONT-K시리즈는 더 강력합니다. 최대 12Gbps의 웹 트래픽 처리 성능과 다수 사용자의 요청을 처리하기 위한 20,000,000 동시 세션은 포털, 텔코, 금융, 대기업 등 대규모 사이트에서 응답 지연이나 패킷 손실 없이 빠르고 안전한 서비스가 가능합니다.
                    </div>
                    <img src={pio2}/>
                </div>
                <div className="article_top">
                    <div>
                        <span>클라우드 데이터센터를 위한 ‘AppTenant ’</span>
                    </div>  
                </div>
                <div className="article_mid">
                    <div>
                        AppTenant 는 클라우드 서비스(XaaS)를 위한 파이오링크의 웹 애플리케이션 독립 가상화 기술입니다. 하나의 WEBFRONT-K는 최대 256개의 애플리케이션을 생성하고, 
                        이에 대한 독립적인 운영을 가능케 합니다. 애플리케이션별로 각각 해당 애플리케이션 전용 관리자, 보안정책, 도메인 설정이 가능하여, 
                        민첩한 비즈니스 요구 및 새로운 웹 애플리케이션의 생성과 변화에 빠르게 대응할 수 있습니다.
                        통합 관리자는 애플리케이션 관리자, 모니터링 관리자 등 관리자 등급을 세분화 할 수 있으며, 애플리케이션 생성/삭제, 설정관리 등이 가능하여, 
                        전체 서비스 상황에 맞춘 유연한 시스템 운영이 가능합니다.
                    </div>
                    <img src={pio3}/>
                </div>
                <div className="article_top">
                    <div>
                        <span>신뢰할 수 있는 웹 보안</span>
                    </div>  
                </div>
                <div className="article_mid">
                    <div>
                        웹 애플리케이션 서비스는 기업 매출과 직결되어 신뢰할 수 있는 안전성이 매우 중요합니다. 
                        예를 들어, 사이트 계정이나 은행계좌 비밀번호 등 정보 탈취는 고객 배상책임을 물 수 있고, 사이트 변조로 인한 기업 이미지 하락은 주가에도 영향을 미칠 수 있습니다. 
                        WEBFRONT-K는 OWASP Top10, 국가정보원 8대 취약점에 완벽하게 대응하여 안전하고 신뢰성 있는 비즈니스 환경을 만들어 드립니다.
                    </div>
                    <img src={pio4}/>
                </div>
            </div>
    </div>
</div>
      );
}