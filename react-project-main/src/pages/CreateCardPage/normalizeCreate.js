const normalizeCreate = (data) => {
    return {
    title: data.title,
    subTitle: data.subTitle,
    description: data.description,
    phone: data.phone,
    email: data.email,
    web: data.web,
    image:{
        url: data.url,
        alt: data.alt,
    },
    address: {
        state: data.state,
        country: data.country,
        city: data.city,
        street: data.street,
        houseNumber: data.houseNumber,
        zip: data.zip,
    },
  };
};

export default normalizeCreate;