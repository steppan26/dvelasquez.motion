export const Calendly:React.FC = () => {
  return(
    <>
      <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/d-velasquezart/30min?background_color=f3e4d9&text_color=370031&primary_color=7a9b76"
      style={{minWidth: '320px', height:'700px'}}
      />
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </>
  )
}
