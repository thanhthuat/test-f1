interface IBanner {}

const Banner: React.FC<IBanner> = () => {
  return (
    <div className="banner">
      <div className="banner__title">
        <a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
      </div>

      <div className="banner__content">
        <div className="banner__content__figure">
          <img
            className="banner__content__figure__img"
            src="https://biz.chosun.com/resizer/ZtjPjVgOsKO93PA9AvavYHauE-M=/616x346/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/WFSLHJY4K362FY5XAICXPBG4JU.jpg"
            alt=""
          />
        </div>
        <div className="banner__content__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis illo commodi
          voluptatum quod perspiciatis quisquam consectetur. Et quis tenetur vitae dolores ea
          molestiae illo dignissimos voluptates ipsam quae eaque quas rerum provident esse quod,
          autem temporibus fugiat officia sit, recusandae repellat animi. Nemo porro doloribus
          aliquam, id sunt iste! Quae tempore illum accusamus dolores voluptatibus veritatis impedit
          exercitationem velit fugiat, ratione facilis id perspiciatis commodi tempora quos eum
          omnis architecto. Repellat illum aut fugiat hic distinctio itaque a obcaecati maxime vel
          quis saepe, laborum velit delectus nisi pariatur! Voluptatem qui possimus neque esse quae
          tempora earum quam ducimus provident.
        </div>

        {/* <div className="banner__content__link">
          <a href="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, placeat!</a>
        </div> */}
      </div>
    </div>
  );
};
export default Banner;
