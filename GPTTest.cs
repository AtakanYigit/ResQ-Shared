using System;
using System.Net;
using System.Web;
using OpenAI.GPT3;
using OpenAI_API;
class Program
{
    static async Task Main(string[] args)
    {
        var request = Console.ReadLine();   
        var api = new OpenAI_API.OpenAIAPI("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");
        var result = await api.Completions.GetCompletion(request);
        Console.WriteLine(result);

    }
}
