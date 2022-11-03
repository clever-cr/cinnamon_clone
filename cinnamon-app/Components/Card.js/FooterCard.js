function FooterCard({ title, address, subaddress, contact }) {
  return (
    <>
      <div className="text-white">
        <p className="font-MontBold text-base">{title}</p>
        <p className="text-sm text-secondary">{address}</p>
        <p className="text-sm text-secondary">{subaddress}</p>
        <p className="text-sm text-secondary">{contact}</p>
      </div>
    </>
  );
}
export default FooterCard;
