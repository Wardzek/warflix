<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'video' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'techno' => 'nullable|string|max:255',
        ]);

        $project = new Project();
        $project->name = $request->name;
        $project->video = $request->video;
        $project->description = $request->description;
        $project->link = $request->link;
        $project->techno = $request->techno;

        if ($request->hasFile('image')) {
            $imageName = time().'.'.$request->image->extension();
            $request->image->storeAs('public/images', $imageName);
            $project->image = $imageName;
        }

        $project->save();

        return response()->json(['success' => 'Project created successfully', 'project' => $project]);
    }
}
