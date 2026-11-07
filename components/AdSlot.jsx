export default function AdSlot({ slotId = '', format = 'auto', className = '' }) {
  // AdSense remains disabled by default until your site is approved by Google AdSense.
  // Once approved, set isAdEnabled to true and add your publisher ID.
  const isAdEnabled = false;
  const adsenseClient = 'ca-pub-XXXXXXXXXXXXXXXX';

  if (!isAdEnabled || !slotId) {
    return null;
  }

  return (
    <aside className={`adsense-slot-container ${className}`} aria-label="Advertisement">
      <span className="ad-label">Advertisement</span>
      <div className="ad-box">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adsenseClient}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}

