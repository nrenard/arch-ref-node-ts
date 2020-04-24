import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

export default model('Product', ProductSchema);
