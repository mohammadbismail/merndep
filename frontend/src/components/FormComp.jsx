import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
const FormComp = (props) => {
  const { initTitle, initPrice, initDescription, onSubmitProp, errors } = props
  // const [title, setTitle] = useState(initTitle)
  // const [price, setPrice] = useState(initPrice)
  // const [description, setDescription] = useState(initDescription)
  const [values, setValues] = useState({
    title: initTitle,
    price: initPrice,
    description: initDescription,
  })
  const [frontErrors, setFrontErrors] = useState({
    titleErr: "",
    priceErr: "",
    descriptionErr: "",
  })

  let errc = 0;
  // const regEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleSubmit = (e) => {
    e.preventDefault()
    if (errc > 0) return
    onSubmitProp(values)
    setValues({ title: "", price: "", description: "" })
  }

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value })
  //   if (values.title === "") {
  //     setFrontErrors({ titleErr: "Title can't be empty" })
  //     errc += 1;
  //   }
  //   else if (values.title.length < 5) {
  //     setFrontErrors({ titleErr: "Title has to be 4 characaters" })

  //   }
  // }
  const titleValidation = (e) => {
    setValues({ ...values, title: e.target.value });
    if (e.target.value === "") {
      errc += 1;
      setFrontErrors({ titleErr: "Title can't be blank" });
    }
    else if (e.target.value.length < 4) {
      errc += 1;
      setFrontErrors({ titleErr: "Title has to be more than 4 characters" });
    }
    else {
      setFrontErrors({ titleErr: "" });
    }
  };
  const priceValidation = (e) => {
    setValues({ ...values, price: e.target.value })
    if (e.target.value < 1) {
      errc += 1;
      setFrontErrors({ priceErr: "Price has to be more than 1" });
    } else {
      setFrontErrors({ priceErr: "" });
    }
  }

  const descriptionValidation = (e) => {
    setValues({ ...values, description: e.target.value });
    if (e.target.value === "") {
      errc += 1;
      setFrontErrors({ descriptionErr: "Desc can't be blank" });
    }
    else if (e.target.value.length < 4) {
      errc += 1;
      setFrontErrors({ descriptionErr: "Desc has to be more than 4 characters" });
    }
    else {
      setFrontErrors({ descriptionErr: "" });
    }
  }
  return (
    <Box>
      <Card style={{ maxWidth: 550, margin: "3rem auto" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            align='center'
            color='secondary'
          >
            Form
          </Typography>
          {errors.map((err, index) =>
            <Typography
              key={index}
              color="textSecondary"
              variant='body2'
              component='p'
              mb={3}
              style={{ color: 'blue', textAlign: 'center', fontWeight: 'bold' }}
            >
              {err}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Title"
                  placeholder='Enter title'
                  type='text'
                  color='secondary'
                  onChange={titleValidation}
                  value={values.title}
                  variant='outlined'
                  fullWidth
                  error={frontErrors.titleErr}
                  helperText={frontErrors.titleErr}

                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Price"
                  placeholder='Enter Price'
                  type='number'
                  color='secondary'
                  onChange={priceValidation}
                  value={values.price}
                  variant='outlined'
                  fullWidth
                  error={frontErrors.priceErr}
                  helperText={frontErrors.priceErr}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rows={4}
                  label="Description"
                  placeholder='Enter Description'
                  type='text'
                  color='secondary'
                  onChange={descriptionValidation}
                  value={values.description}
                  variant='outlined'
                  fullWidth
                  error={frontErrors.descriptionErr}
                  helperText={frontErrors.descriptionErr}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant='outlined'
                  color='secondary'
                  size='large'
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default FormComp