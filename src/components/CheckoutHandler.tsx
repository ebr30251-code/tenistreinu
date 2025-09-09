import { useEffect } from 'react';

// Mapeamento dos links de checkout por cor e tamanho
const checkoutLinks = {
  black: {
    "33": "https://conceitosmart.pay.yampi.com.br/r/JAYT3P2L64",
    "34": "https://conceitosmart.pay.yampi.com.br/r/8M9BPUWVKV", 
    "35": "https://conceitosmart.pay.yampi.com.br/r/7QMUC1L4T8",
    "36": "https://conceitosmart.pay.yampi.com.br/r/3WLYPH7PRR",
    "37": "https://conceitosmart.pay.yampi.com.br/r/22NYKK7YHC",
    "38": "https://conceitosmart.pay.yampi.com.br/r/256Q9O8HU3",
    "39": "https://conceitosmart.pay.yampi.com.br/r/NKZGG413ZN",
    "40": "https://conceitosmart.pay.yampi.com.br/r/CNR41OHWOC",
    "41": "https://conceitosmart.pay.yampi.com.br/r/2MOAXIHQ8Z",
    "42": "https://conceitosmart.pay.yampi.com.br/r/H8GXR6VNPX",
    "43": "https://conceitosmart.pay.yampi.com.br/r/A3MUIGL732"
  },
  beige: {
    "33": "https://conceitosmart.pay.yampi.com.br/r/OO7Y3CDRJ0",
    "34": "https://conceitosmart.pay.yampi.com.br/r/9F9HWOIFP4",
    "35": "https://conceitosmart.pay.yampi.com.br/r/LCG1K6LE6J",
    "36": "https://conceitosmart.pay.yampi.com.br/r/J3NNMTNT65",
    "37": "https://conceitosmart.pay.yampi.com.br/r/G383YF8631",
    "38": "https://conceitosmart.pay.yampi.com.br/r/GNPGO3PPT5",
    "39": "https://conceitosmart.pay.yampi.com.br/r/5KMKRHKJCE",
    "40": "https://conceitosmart.pay.yampi.com.br/r/JPYG3047DS",
    "41": "https://conceitosmart.pay.yampi.com.br/r/3S7J2X8S6T",
    "42": "https://conceitosmart.pay.yampi.com.br/r/2C3ING9R1Y",
    "43": "https://conceitosmart.pay.yampi.com.br/r/N1L5DZE3L7"
  },
  mint: {
    "33": "https://conceitosmart.pay.yampi.com.br/r/E06101IOBV",
    "34": "https://conceitosmart.pay.yampi.com.br/r/RFIP4MQEYA",
    "35": "https://conceitosmart.pay.yampi.com.br/r/KQ164ICXLE",
    "36": "https://conceitosmart.pay.yampi.com.br/r/FE6A8UPQJC", 
    "37": "https://conceitosmart.pay.yampi.com.br/r/5SJFZ66R3F",
    "38": "https://conceitosmart.pay.yampi.com.br/r/H7CQCQJPN4",
    "39": "https://conceitosmart.pay.yampi.com.br/r/LNAV3M6WH1",
    "40": "https://conceitosmart.pay.yampi.com.br/r/414LNSOHUY",
    "41": "https://conceitosmart.pay.yampi.com.br/r/QWZ2WYT1SZ",
    "42": "https://conceitosmart.pay.yampi.com.br/r/TJSS1HMEBM",
    "43": "https://conceitosmart.pay.yampi.com.br/r/H4AHFLVB1Y"
  }
};

// Função para rastrear eventos do Facebook Pixel
const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
    console.log('Facebook Pixel Event:', eventName, parameters);
  }
};

// Função para enviar eventos para a API de Conversões
const sendConversionAPI = async (eventName: string, parameters?: any) => {
  try {
    // Dados do evento para a API de Conversões
    const eventData = {
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: window.location.href,
        user_data: {
          client_ip_address: '', // Será preenchido pelo servidor
          client_user_agent: navigator.userAgent,
        },
        custom_data: parameters || {}
      }],
      access_token: 'EAAr6jVFDV68BPZAzvTFtPKszZBP0ZCJmRu5IXpQmQKzmvgaqiKZCY2ZBQoHqutMPdA6lb3ZAsJpY9CmDzYj3d4QxqOlSXbnRPi2w0ZCAofoFIXFlRR9THEjmTMsMApWZAJbEaTN4tXbNhNGWvji01WWu3BVW2QOv5FNAJk5ubPH8bLngJZAAvrnCgGebyDWwZAmA8bJwZDZD'
    };

    // Enviar para a API de Conversões do Facebook
    const response = await fetch(`https://graph.facebook.com/v18.0/1061204338869818/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData)
    });

    if (response.ok) {
      console.log('Conversion API Event sent:', eventName, parameters);
    } else {
      console.error('Error sending Conversion API event:', await response.text());
    }
  } catch (error) {
    console.error('Erro ao enviar evento para API de Conversões:', error);
  }
};

export const handleCheckout = (color: string, size: string) => {
  const link = checkoutLinks[color as keyof typeof checkoutLinks]?.[size];
  
  if (link) {
    // Rastrear evento de início do checkout
    const eventParams = {
      content_type: 'product',
      content_ids: [`treinu-${color}-${size}`],
      content_name: `Tênis TREINU ${color} - Tamanho ${size}`,
      content_category: 'Calçados',
      value: 189.90,
      currency: 'BRL',
      num_items: 1
    };

    // Enviar para Facebook Pixel
    trackFacebookEvent('InitiateCheckout', eventParams);
    
    // Enviar para API de Conversões
    sendConversionAPI('InitiateCheckout', eventParams);
    
    // Abrir na mesma página
    window.location.href = link;
  } else {
    console.error('Link de checkout não encontrado para:', color, size);
  }
};

const CheckoutHandler = () => {
  useEffect(() => {
    // Rastrear visualização de página
    const viewContentParams = {
      content_type: 'product',
      content_ids: ['treinu-shoes'],
      content_name: 'Tênis TREINU - Landing Page',
      content_category: 'Calçados',
      value: 189.90,
      currency: 'BRL'
    };

    // Enviar para Facebook Pixel
    trackFacebookEvent('ViewContent', viewContentParams);
    
    // Enviar para API de Conversões
    sendConversionAPI('ViewContent', viewContentParams);

    // Rastrear tempo na página (engajamento)
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      if (timeSpent > 10) { // Mais de 10 segundos na página
        trackFacebookEvent('PageView', {
          time_spent: timeSpent,
          content_name: 'Tênis TREINU - Landing Page'
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default CheckoutHandler;