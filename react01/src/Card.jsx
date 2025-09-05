/* eslint-disable @next/next/no-img-element */
export default function Card3({price="$30",title="bored ape nft accidental"}) {
    // console.log(props);
  return (
    
    <>
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] m-4">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-center  ">
          <h1 className="p-0 m-0 font-bold text-white">{title}</h1>
          <h1 className="text-white">Price</h1>
        </div>
        <div className="flex  justify-between text-white">
          <p className="text-white">#345</p>
          <p className="text-white">{price}</p>
        </div>
      </div>
    </div>
    </>
  )
}
