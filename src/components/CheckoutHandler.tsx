import { useEffect } from 'react';

// Mapeamento dos links de checkout por cor e tamanho
const checkoutLinks = {
  black: {
    "38": "https://conceitosmart.pay.yampi.com.br/r/JAYT3P2L64",
    "39": "https://conceitosmart.pay.yampi.com.br/r/8M9BPUWVKV", 
    "40": "https://conceitosmart.pay.yampi.com.br/r/7QMUC1L4T8",
    "41": "https://conceitosmart.pay.yampi.com.br/r/3WLYPH7PRR",
    "42": "https://conceitosmart.pay.yampi.com.br/r/22NYKK7YHC",
    "43": "https://conceitosmart.pay.yampi.com.br/r/256Q9O8HU3",
    "44": "https://conceitosmart.pay.yampi.com.br/r/NKZGG413ZN",
    "45": "https://conceitosmart.pay.yampi.com.br/r/CNR41OHWOC",
    "46": "https://conceitosmart.pay.yampi.com.br/r/2MOAXIHQ8Z",
    "47": "https://conceitosmart.pay.yampi.com.br/r/H8GXR6VNPX",
    "48": "https://conceitosmart.pay.yampi.com.br/r/A3MUIGL732"
  },
  beige: {
    "38": "https://conceitosmart.pay.yampi.com.br/r/OO7Y3CDRJ0",
    "39": "https://conceitosmart.pay.yampi.com.br/r/9F9HWOIFP4",
    "40": "https://conceitosmart.pay.yampi.com.br/r/LCG1K6LE6J", 
    "41": "https://conceitosmart.pay.yampi.com.br/r/J3NNMTNT65",
    "42": "https://conceitosmart.pay.yampi.com.br/r/G383YF8631",
    "43": "https://conceitosmart.pay.yampi.com.br/r/GNPGO3PPT5",
    "44": "https://conceitosmart.pay.yampi.com.br/r/5KMKRHKJCE",
    "45": "https://conceitosmart.pay.yampi.com.br/r/JPYG3047DS",
    "46": "https://conceitosmart.pay.yampi.com.br/r/3S7J2X8S6T",
    "47": "https://conceitosmart.pay.yampi.com.br/r/2C3ING9R1Y",
    "48": "https://conceitosmart.pay.yampi.com.br/r/N1L5DZE3L7"
  },
  mint: {
    "38": "https://conceitosmart.pay.yampi.com.br/r/E06101IOBV",
    "39": "https://conceitosmart.pay.yampi.com.br/r/RFIP4MQEYA",
    "40": "https://conceitosmart.pay.yampi.com.br/r/KQ164ICXLE",
    "41": "https://conceitosmart.pay.yampi.com.br/r/FE6A8UPQJC", 
    "42": "https://conceitosmart.pay.yampi.com.br/r/5SJFZ66R3F",
    "43": "https://conceitosmart.pay.yampi.com.br/r/H7CQCQJPN4",
    "44": "https://conceitosmart.pay.yampi.com.br/r/LNAV3M6WH1",
    "45": "https://conceitosmart.pay.yampi.com.br/r/414LNSOHUY",
    "46": "https://conceitosmart.pay.yampi.com.br/r/QWZ2WYT1SZ",
    "47": "https://conceitosmart.pay.yampi.com.br/r/TJSS1HMEBM",
    "48": "https://conceitosmart.pay.yampi.com.br/r/H4AHFLVB1Y"
  }
};

// Função para rastrear eventos do Facebook Pixel
const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
};

// Função para enviar eventos para a API de Conversões
const sendConversionAPI = async (eventName: string, parameters?: any) => {
  try {
    const response = await fetch('/api/facebook-conversions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: 'EAAr6jVFDV68BPZAzvTFtPKszZBP0ZCJmRu5IXpQmQKzmvgaqiKZCY2ZBQoHqutMPdA6lb3ZAsJpY9CmDzYj3d4QxqOlSXbnRPi2w0ZCAofoFIXFlRR9THEjmTMsMApWZAJbEaTN4tXbNhNGWvji01WWu3BVW2QOv5FNAJk5ubPH8bLngJZAAvrnCgGebyDWwZAmA8bJwZDZD',
        pixel_id: '1061204338869818',
        event_name: eventName,
        parameters: parameters
      })
    });
  } catch (error) {
    console.error('Erro ao enviar evento para API de Conversões:', error);
  }
};

export const handleCheckout = (color: string, size: string) => {
  const link = checkoutLinks[color as keyof typeof checkoutLinks]?.[size];
  
  if (link) {
    // Rastrear evento de início do checkout
    trackFacebookEvent('InitiateCheckout', {
      content_type: 'product',
      content_ids: [`treinu-${color}-${size}`],
      value: 189.90,
      currency: 'BRL'
    });
    
    // Enviar para API de Conversões
    sendConversionAPI('InitiateCheckout', {
      content_type: 'product',
      content_ids: [`treinu-${color}-${size}`],
      value: 189.90,
      currency: 'BRL'
    });
    
    // Abrir na mesma página
    window.location.href = link;
  } else {
    console.error('Link de checkout não encontrado para:', color, size);
  }
};

const CheckoutHandler = () => {
  useEffect(() => {
    // Rastrear visualização de página
    trackFacebookEvent('ViewContent', {
      content_type: 'product',
      content_ids: ['treinu-shoes'],
      value: 189.90,
      currency: 'BRL'
    });
    
    sendConversionAPI('ViewContent', {
      content_type: 'product', 
      content_ids: ['treinu-shoes'],
      value: 189.90,
      currency: 'BRL'
    });
  }, []);

  return null;
};

export default CheckoutHandler;