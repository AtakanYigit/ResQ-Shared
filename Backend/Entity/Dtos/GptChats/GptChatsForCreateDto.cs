using Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Dtos.GptChats
{
    public class GptChatsForCreateDto : IDto
    {
        public int UserId { get; set; }
        public int PostId { get; set; }
        public string ResponseId { get; set; }
        public string Message { get; set; }
        public string SentBy { get; set; }
    }
}
