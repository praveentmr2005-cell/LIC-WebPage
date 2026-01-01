import { useEffect } from 'react'

function ScriptLoader() {
  useEffect(() => {
    // Load jQuery if not already loaded
    if (!window.jQuery) {
      const jq = document.createElement('script')
      jq.type = 'text/javascript'
      jq.src = '/common/js/jquery.min.js'
      document.getElementsByTagName('head')[0].appendChild(jq)
    }

    // Load jsSocials
    const jsSocials = document.createElement('script')
    jsSocials.type = 'text/javascript'
    jsSocials.src = '/common/js/jssocials/jssocials.js'
    document.head.appendChild(jsSocials)

    jsSocials.onload = () => {
      if (window.jQuery && window.jQuery.fn.jsSocials) {
        window.jQuery(window).on('load', function() {
          window.jQuery('.socialShare').jsSocials({
            showLabel: false,
            showCount: false,
            shares: ['twitter', 'facebook', 'linkedin', 'whatsapp']
          })
        })
      }
    }

    // Load WhatsApp widget
    const whatsappOptions = {
      whatsapp: '919092438096',
      call_to_action: 'Message us',
      position: 'left'
    }
    const proto = document.location.protocol
    const host = 'getbutton.io'
    const url = proto + '//static.' + host
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = url + '/widget-send-button/js/init.js'
    s.onload = function() {
      if (window.WhWidgetSendButton) {
        window.WhWidgetSendButton.init(host, proto, whatsappOptions)
      }
    }
    const x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)

    // Load Bootstrap and other JS files
    const scripts = [
      '/templates/ITR1158/assets/js/0.jquery.min.js',
      '/templates/ITR1158/assets/js/1.bootstrap.min.js',
      '/templates/ITR1158/assets/js/10.waypoints.min.js',
      '/templates/ITR1158/assets/js/11.wow.min.js',
      '/templates/ITR1158/assets/js/12.custom.js',
      '/templates/ITR1158/assets/js/2.owl.carousel.min.js',
      '/templates/ITR1158/assets/js/4.jquery.colorbox.js',
      '/templates/ITR1158/assets/js/5.jquery.counterup.min.js'
    ]

    scripts.forEach((src) => {
      const script = document.createElement('script')
      script.src = src
      script.type = 'text/javascript'
      document.body.appendChild(script)
    })

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

export default ScriptLoader

